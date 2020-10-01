import React from 'react'
import { connect } from 'react-redux'
import { toggleComplete } from '../actions';

const ToDo = ({ id, text, completed, toggleComplete }) => {
  return (
    <li 
      className={completed ? 'completed' : 'not-completed'}
      onClick={() => toggleComplete(id)}
    >
      {text}
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleComplete: id => dispatch(toggleComplete(id)),
})

export default connect(null, mapDispatchToProps)(ToDo)