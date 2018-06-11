import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { getData } from './redux';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



class App extends Component {
    constructor(){
        super();
        this.state ={
            userInput:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
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
    // console.log(this.props)
      
        return(
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/Services' component={Services} />
                    <Route path='/Contact' component={Contact} />
                    <Route path='/Footer' component={Footer} />
                </Switch>
                <div>
                    <form onSubmit={ this.handleSubmit}>
                    <input type='text' value={this.state.userInnput}
                    name='userInput' onChange={this.handleChange}/>
                    <button>Submit</button>
                     
                
                    </form>
                 </div>
                <Footer />
            </div>
        )
    }
}

export default connect(state=>state,(App));