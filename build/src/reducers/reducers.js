import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, DELETE_TODO } from '../actions/action';

function todos(state=[], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          date:new Date().toISOString().slice(0, 10),
          id:action.id
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      ) 
    case DELETE_TODO:
      return state.filter(state => state.id !== action.id);
  default:
      return state
  }
}
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return (action.filters
        )
    default:
      return state
    }
  }
export const todoApp = combineReducers({
  todos,
  visibilityFilter
})
  
export default todoApp