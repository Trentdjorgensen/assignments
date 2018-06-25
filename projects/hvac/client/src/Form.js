import React,{Component} from 'react';
import './index.css';
import {connect} from 'react-redux';
import {getForm,addForm} from './redux';

class Form extends Component{
    constructor(){
        super();
        this.state = {
            name:'',
            phone:'',
            email:'',
            description:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        const {value, name} = e.target
        this.setState({
            [name]:value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        const newForm = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            description: this.state.description
        }
        
        this.props.addForm(newForm)
        this.setState({name:'',phone:'',email:'',description:''})
    }
    
    componentDidMount(){
        this.props.getForm();
   }
  
    render(){
        const forms = this.props.forms.map(form => 
        <h1 key={form._id} > {form.name},{form.phone},{form.email},{form.description}</h1>)
       
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
            
                    <p><b>Contact Form </b></p> 

                    <input type='text' value={this.state.name} name='name'onChange={this.handleChange}
                    placeholder='Name'/>
                 
                    <input type='tel' value={this.state.phone} name='phone'onChange={this.handleChange}
                    placeholder='Phone'/>
                 
                    <input type='text' value={this.state.email} name='email'onChange={this.handleChange}
                    placeholder='Email'/>
                
                    <input type='text' value={this.state.description} name='description'onChange={this.handleChange}
                    placeholder='Description'/>

                    <button >Submit</button>
                </form>
                   {forms}
            </div>
        )
    }
}

export default connect(state=>({forms:state}),{getForm,addForm})(Form);