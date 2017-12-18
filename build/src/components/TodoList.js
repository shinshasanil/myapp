import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export const TodoList = ({ todos, onTodoClick, deleteTodo }) => (
  <ul>
    {todos?todos.map(todo =>
      <Todo
        key={todo.id}
        onClick={() => onTodoClick(todo.id)} completed={todo.completed} text={todo.text} date={todo.date}
     id={todo.id} deleteTodo={deleteTodo}/>
    ):''}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    completed: PropTypes.bool,
    text: PropTypes.string,
    deleteTodo: PropTypes.func
  })),
  onTodoClick: PropTypes.func
}
