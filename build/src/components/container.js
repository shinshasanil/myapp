import { connect } from 'react-redux'
import { AddTodo } from '../components/component.js'
import { addTodo, toggleTodo, setVisibilityFilter,deleteTodos } from '../actions/action'

function setFilter (todos, filter){
    switch(filter){
        case 'SHOW_ALL':
        return  todos
        case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    }
}
function mapStateToProps(state){
    return{
         todos: setFilter(state.todos, state.visibilityFilter)
    }
}
function mapDispatchToProps(dispatch){
    return {
        handleOnClick:(value) => {
            if(value)
            return dispatch(addTodo(value))
        },
        onTodoClick:(id)=>dispatch(toggleTodo(id)),
        getFilter:(filters)=>dispatch(setVisibilityFilter(filters)),
        deleteTodo:(id)=>dispatch(deleteTodos(id))
        
    }  
}
export const App = connect (
    mapStateToProps,
    mapDispatchToProps,
)(AddTodo)
