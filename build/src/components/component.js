import React from 'react'
import PropTypes from 'prop-types'
import { TodoList } from './TodoList'
import '../style.css'

export class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {text:''}
        this.handleOnChange = this.handleOnChange.bind(this);  
    }
    handleOnChange(e){
        this.setState({text:e.target.value})      
    }
    handleOnClick(){
        this.setState({text:''})
        this.props.handleOnClick(this.state.text)
    }   
    render(){
        const { handleOnChange, handleOnClick, todos, onTodoClick,getFilter,filters,deleteTodo } = this.props
        return(
            <div className="Container">
                <div className ="Todo"> 
                <h1>Todo List</h1>              
                    <input type="text" onChange = {this.handleOnChange}  value={this.state.text}/>
                    <button className="Add-button" onClick={()=>this.handleOnClick()}>
                        <i className="fa fa-plus Icon" aria-hidden="true"></i>Add Todo</button>
                    <TodoList todos={this.props.todos} onTodoClick={onTodoClick} className="Todo-list" deleteTodo={deleteTodo} /> 
                    <div className ="Footer">
                        <button className="Footer-button All-button" onClick={()=>getFilter('SHOW_ALL')} >Show All</button>
                        <button className="Footer-button Comp-button" onClick={()=>getFilter('SHOW_COMPLETED')} >Show Complete</button>
                        <button className="Footer-button Act-button" onClick={()=>getFilter('SHOW_ACTIVE')} >Show active</button>
                    </div>
                    
                </div>
            </div>
        );
    }
}
AddTodo.propTypes = {
    handleOnChange:PropTypes.func,
    handleOnClick:PropTypes.func,
    onTodoClick:PropTypes.func,
    getFilter:PropTypes.func,
    deleteTodo: PropTypes.func
}