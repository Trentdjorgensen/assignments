import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getTodos, addTodo } from './redux'; 
import Todo from './Todo';

class App extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            description:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount(){
        this.props.getTodos()
    }

    handleChange(e){
       const {value, name} = e.target
       this.setState({
           [name]:value
       })
    }

    handleSubmit(e){
        e.preventDefault()
        const newTodo={
            title: this.state.title,
            description: this.state.description
        }
        this.props.addTodo(newTodo)
        this.setState({title: '', description: '' })
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type='text'value={this.state.title}
                    name='title' onChange={this.handleChange} placeholder='title'/>
                <input type='text' value={this.state.description}
                    name='description'onChange={this.handleChange} placeholder='Description'/>
                <button>Submit</button>
                </form>

                {this.props.todos.map(todo => 
                    <Todo key={todo._id} id={todo._id} title={todo.title} description={todo.description}/>
                )}
            </div>
        )
    }
}

export default connect(state=>({todos:state}), {getTodos, addTodo}) (App);