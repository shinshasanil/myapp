import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text ,date, id, deleteTodo}) => (
  <li  className=" li ">
    <a  onClick={onClick}
    className={ completed ? 'fa fa-check' : 'Active'}>{text} </a>
    <span>{date}</span>
    <a className="Delete" ><i className="fa fa-trash " onClick={()=>deleteTodo(id)} aria-hidden="true"></i></a>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func,
  completed: PropTypes.bool,
  text: PropTypes.string,
  deleteTodo:PropTypes.func
}

export default Todo