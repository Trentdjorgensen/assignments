import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getData} from './redux';
import Form from './Component/Form';
import Title from './Component/Title';

// import {Switch, Route} from 'react-router-dom';

class App extends Component{
    constructor(){
    super();
    this.state={
        userInput:''

    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
}
componentDidMount(){
    this.props.getData();
}


handleChange(e){
    this.setState({
        userInput: e.target.value
    })
}

handleSubmit(e){
    e.preventDefault()
    this.props.getData( this.state.userInput);
    this.setState({ userInput:''})
}

render(){
   
    return(
        <div>
           <Title />
           <Form getData={this.getData} />
        
        
        </div>
    )
}
}

export default connect(state=>state,{getData})(App);