import { useState } from 'react'

const AnecdotesWithMaxVotes=({anecdotes, votes})=> {
  const maxVotes= Math.max(...votes)
  const maxVotesIndex= votes.indexOf(maxVotes)
return(
  <div>
    <h1>Anecdote with most votes</h1>
    <div>{anecdotes[maxVotesIndex]}</div>
    <div>has {maxVotes} votes</div>
  </div>
)
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));

  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };
  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>
      <AnecdotesWithMaxVotes anecdotes={anecdotes} votes={votes}/>
    </div>
  );
};

export default App

