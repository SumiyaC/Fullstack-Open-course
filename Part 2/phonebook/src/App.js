import React, { useEffect, useState } from 'react'
import Persons from './Persons'
import Filter from './Filter'
import PersonForm from './PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('');
  

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
    event.preventDefault()

    const samePerson = persons.find((person) => person.name === newName);

    if (samePerson) {
      alert(`${newName} is already added to the phonebook.`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject));
      setNewName('')
      setNewNumber('')
    }
  }
  
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange}
      handleNumberChange={handleNumberChange} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App;
