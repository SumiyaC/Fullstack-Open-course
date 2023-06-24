import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good,neutral,bad}) => {
  const total=good + neutral + bad
  const avg= (good*1 + neutral*0 + bad*(-1))/total
  const pos=(good/total)*100

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={avg} />
          <StatisticLine text="positive" value={`${pos} %`} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const setToFeedback1 = () => {
    setGood(good + 1)
  }
  const setToFeedback2 = () => {
    setNeutral(neutral + 1)
  }
  const setToFeedback3 = () => {
    setBad(bad + 1)
  }
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setToFeedback1} text="good"/>
      <Button handleClick={setToFeedback2} text="neutral"/>
      <Button handleClick={setToFeedback3} text="bad"/>
      <h1>statistics</h1>
      {good || neutral || bad ? (
        <Statistics good={good} neutral={neutral} bad={bad} />) 
        : ( 
        <p>No feedback given</p>
      )}

    </div>
  )
}

export default App
