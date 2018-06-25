import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getVotes, addVotes, newComment } from './redux'; 
import Vote from './vote';
import Nav from './components/Nav';
import Contact from './components/Contact';
import './index.css';

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
        this.props.getVotes()
        
    }
    handleChange(e){
       const {value, name} = e.target
       this.setState({
           [name]:value
       })
    }
    handleSubmit(e){
        e.preventDefault()
        const newVote={
            title: this.state.title,
            description: this.state.description
        }
        this.props.addVotes(newVote)
        console.log(newVote)
        this.setState({title: '', description: '' })
        
    }
    render(){
        console.log(this.props)
        return(
            <div className='container'>
                <Nav/>
                <Contact/>
               
                <div className='form'>
                <h1>Joe's Work Station</h1>
                <h2>Article</h2>
                <form onSubmit={this.handleSubmit}>
                <input type='text'value={this.state.title}
                    name='title' onChange={this.handleChange} placeholder='title'/>
                <input type='text' value={this.state.description}
                    name='description'onChange={this.handleChange} placeholder='Description'/>



                <button>Submit New Title</button>
                </form>
            
                {this.props.votes.map(vote => 
                    <Vote key={vote._id} id={vote._id} title={vote.title} 
                    description={vote.description} comment={vote.comment}/>
                )}
                </div>
            </div>
        )
    }
}

export default connect(state=>({votes:state}),{getVotes, addVotes, newComment})(App);