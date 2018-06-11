import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addPidgeon} from './redux';

class AddForm extends Component{
    constructor(props){
        super();
    this.state = {
        inputs:{
            nickname:'',
            imgUrl: ''
        }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const {value, name} = e.target;
        this.setState(prevState =>{
            return{
                inputs:{
                    ...prevState.inputs,
                    [name]:value
                }
            }
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addPidgeon(this.state.inputs)
        console.log(this.state.inputs);

    }

    render(){
        const{inputs:{nickname, imgUrl}} = this.state;
        console.log(this.state.inputs);
        return(
            <form onSubmit={this.handleSubmit}>
                <input name='nickname' type='text'value={nickname} onChange={this.handleChange} placeholder='Enter Nickname'/>
                <input name='imgUrl'value={imgUrl} type='text'onChange={this.handleChange} placeholder='Image URL'/>
                <button>Submit</button> 
            </form>
        )
    }
}

export default connect(null, {addPidgeon})(AddForm);