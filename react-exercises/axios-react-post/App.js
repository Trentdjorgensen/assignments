import React, { Component } from 'react';
import axios from 'axios';
import Todo from './Todo';
import Form from './Form';

class App extends Component {
  constructor(){
    super()

    this.state = {
      inputs: {
        title: '',
        description: '',
      },
      data: []
    }
  }

  componentDidMount(){
    axios.get('https://api.vschool.io/marcus/todo').then(response => {
      this.setState({data: response.data})
    })
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState(prevState =>{
      return {
        inputs:{
          ...prevState.inputs,
          [name]: value
        }
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.post('https://api.vschool.io/marcus/todo', this.state.inputs).then(response => {
      this.setState(prevState => {
        return {
            data: [...prevState.data, response.data]
        }
      })
    })
    
  }

  render() {
    return (
      <div>
        <Form title={this.state.title} description={this.state.description} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <Todo data={this.state.data} />
      </div>
    );
  }
}

export default App;