import React from 'react';
import {deleteVote, editVote, newComment} from './redux'
import {connect} from 'react-redux';


class Vote extends React.Component{
    constructor(){
        super();
        this.state = {
            title: '',
            description:'',
            comment:'',
            isToggled:false
           
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleComment = this.handleComment.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    handleChange(e){
        const {value, name} = e.target
        this.setState({
            [name]:value
        })
     }

     handleSubmit(e){
         e.preventDefault()
         const newVote ={
             title: this.state.title,
             description: this.state.description,
             comment: this.state.comment
         }
         this.props.editVote(this.props.id, newVote)
         this.setState({ isToggled:false, title:'', description:'',comment:''})
     }

    toggle(){
        this.setState(prevState => {
            return{
                isToggled: !prevState.isToggled
            }
        })
    }
    handleComment(e){
        this.setState({ isToggled:false, comment:e.target.value})

        console.log(this.props.comment)
    }
    render(){
        console.log(this.props)
    return(
        <div>
        <form onSubmit={this.handleSubmit}>
        <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
           
           <p>{this.props.comment.map(comment => comment) }</p>
            
            <input type='text' value={this.state.description}
                    name='description'onChange={this.handleChange} placeholder='description'/>

            <input type='text' name='comment' onChange={this.handleComment} 
                    value={this.state.comment} placeholder='comment'/>  
                    <br/>      
            <button onClick={ () => this.props.newComment(this.props.id, this.props.comment,
             this.state.comment)}>Add Comment</button>
            <button>Submit Edit</button>
            <button onClick={ () => this.props.deleteVote(this.props.id)}>Delete</button> 
        </form> 
        </div>
    
    )}
    
} 

export default connect(null, {deleteVote, editVote, newComment })(Vote);