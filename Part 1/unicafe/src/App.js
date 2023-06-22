import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const setToFeedback1 = () => {
    const updatedGood= good+1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }
  const setToFeedback2 = () => {
    const updatedNeutral= neutral+1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)
  }
  const setToFeedback3 = () => {
    const updatedBad= bad+1
    setBad(updatedBad)
    setTotal(good + neutral + updatedBad)
  }
  const avg= (good*1 + neutral*0 + bad*(-1))/total

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={(setToFeedback1)}>
        good
      </button>
      <button onClick={(setToFeedback2)}>
        neutral  
      </button>
      <button onClick={(setToFeedback3)}>
        bad
      </button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {avg}</p>

    </div>
  )
}

export default App
