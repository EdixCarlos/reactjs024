import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import "./index.css";

const App = (props) => {

  const [selected, setSelected] = useState(0)
  const [anecdote1, setAnecdote1] = useState(0)
  const [anecdote2, setAnecdote2] = useState(0)
  const [anecdote3, setAnecdote3] = useState(0)
  const [anecdote4, setAnecdote4] = useState(0)
  const [anecdote5, setAnecdote5] = useState(0)
  const [anecdote6, setAnecdote6] = useState(0)
  const anecdotesRm = () => {
    setSelected(selected+1)
  }
  const voteAnecdote = () =>{
    switch(selected){
      case 0:
        return setAnecdote1(anecdote1+1)
      case 1:
        return setAnecdote2(anecdote2+1)
      case 2:
        return setAnecdote3(anecdote3+1)
      case 3:
        return setAnecdote4(anecdote4+1)
      case 4:
        return setAnecdote5(anecdote5+1)
      case 5:
        return setAnecdote6(anecdote6+1)
      default:
        return 0
    }

  }

  return (
    <div>
      {props.anecdotes[selected]}<br/>has {anecdote1} votes<br/>
      <button onClick={voteAnecdote}>vote</button>
      <button onClick={anecdotesRm}>next anecdote</button>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)