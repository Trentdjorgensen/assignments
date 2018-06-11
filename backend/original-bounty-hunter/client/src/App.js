import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getData} from './redux';
import Title from './components/Title.js';
import Card from './components/Card';
import './app.css';

class App extends Component{
    componentDidMount(){
        this.props.getData()
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <Title/>
                <Card/>
                
            </div>
        )
    }
}

export default connect(state=>state,{getData})(App)