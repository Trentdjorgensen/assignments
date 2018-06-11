import React from 'react';
import './style.css';

class App extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        placeOfBirth: '',
        phone: '',
        favoriteFood: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(e){
    this.setState({[e.target.name]: e.target.value});
}
handleSubmit(e){
    console.log('A name was submitted: ' + this.state.value);
    e.preventDefault();
}
 render(){
    return(
    <div class='box'>
        <form onSubmit={this.handleSubmit}>
              <label>
                <div class='container'> 
                First Name:
                  <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                </div>
                <div>
                  Last Name:
                  <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                  <div/>
                  <div>
                  Email:
                  <input type="text" name="emailAddress" value={this.emailAddress} onChange={this.handleChange}/>
                  </div>
                
                 <br/>
                 
                 <div>
                     Place of Birth:
                  <input type="text" name="placeOfBirth" value={this.placeOfBirth} onChange={this.handleChange}/>
                  </div>
                  <div>
                  Phone:
                  <input type="text" name="phone" value={this.phone} onChange={this.handleChange}/>
                  </div>
                  <div>
                  Favorite food:
                  <input type="text" name="favoritefood" value={this.favoriteFood} onChange={this.handleChange}/>
                  </div>
                </div>
                </label>
                <br/>
                <input type='submit' value='Submit'/>
            </form>
    </div>
            
    );
};
};

export default App;