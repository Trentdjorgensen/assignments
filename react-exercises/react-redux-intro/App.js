import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOne, subtractOne, updateNumber } from './redux';

class App extends Component {
    constructor(){
        super();
        this.state = { 
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateNumber( this.state.userInput );
        this.setState({ userInput: '' })
    }

    render(){
        console.log(this.props)
        return (
            <div>
            <h1> { this.props.counter } </h1>
            <button onClick={ this.props.addOne }> Add 1 </button>
            <button onClick={ this.props.subtractOne }> Subtract 1 </button>
            <form onSubmit={ this.handleSubmit }>
                <input 
                    type="number" 
                    value={ this.state.userInput } 
                    name="userInput" 
                    onChange={ this.handleChange }/>
                <button>Submit</button>
            </form>
            </div>
        )
    }
}

export default connect(state=>state, { addOne, subtractOne, updateNumber })(App);