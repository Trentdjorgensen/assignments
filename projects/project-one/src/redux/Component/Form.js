import React from 'react';

class Form extends Component{
    render(){
    return(
        <form onSubmit={this.props.getData}>
            <input type='text' name='city' placeholder='city...'/>
            <input type='text' name='country' placeholder='country...'/>
            <button>Get Weather</button>
        </form>
    )
}
}

export default Form;