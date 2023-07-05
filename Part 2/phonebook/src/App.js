import React, { useState,useEffect} from 'react'
import Persons from './Components/Persons'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import personService from './services/personService';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
      setFilter(event.target.value)
    }

  const filteredPersons = filter
      ? persons.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
      )
      : persons

  
  const addPerson = (event) => {
    event.preventDefault();

    const samePerson = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())

    if (samePerson) {
      if (window.confirm(`${newName} is already added to the phonebook.Replace the old number with a new one?`)
    )
    {
      const updatedPerson = { ...samePerson, number: newNumber };
      personService
        .update(samePerson.id, updatedPerson)
        .then((updatedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== samePerson.id ? person : updatedPerson
            )
          );
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          console.error("Error updating person:", error);
        });
    }}
    else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      personService
        .create(personObject)
        .then((createdPerson) => {
          setPersons(persons.concat(createdPerson));
          setNewName('');
          setNewNumber('');
        })
        .catch((error) => {
          console.error('Error saving person:', error);
        });
    }
  };

  const deletePerson = (id) => {
    const personToDelete = persons.find((person) => person.id === id);

    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          alert(`Error deleting person: ${error.message}`);
        });
    }
  };

  
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange}
      handleNumberChange={handleNumberChange} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} deletePerson={deletePerson} />
    </div>
  )
}

export default App;

