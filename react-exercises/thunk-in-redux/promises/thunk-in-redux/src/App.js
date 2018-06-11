import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { getTodos } from './redux';
 
 class App extends Component {
     constructor(){
         super();
         this.state = {
             // controlled inputs
             // toggles
         }
     }

    componentDidMount(){
       this.props.getTodos()
     }
 
     render(){
         return (
             <div>
               { this.props.todos && this.props.todos.map(todo => <div>{todo.title}</div>)}
             </div>
         )
     }
 }
 
 export default connect(state=>({ todos: state }), { getTodos })(App);