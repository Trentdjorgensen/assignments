import React from 'react';
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';
import axios from 'axios';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import {connect} from 'react-redux';

// https://vschool-cors.herokuapp.com?url=http://api.openweathermap.org/data/2.5/forecast?units=imperial&id=524901&APPID=fc12319d19f952f36daba00a64416f2c

// const API_KEY = 'fc12319d19f952f36daba00a64416f2c';

// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}

// 'http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}'

class App extends React.Component{
   
    state={
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        
            axios.get('https://vschool-cors.herokuapp.com?url=http://api.openweathermap.org/data/2.5/find?lat=40.7&lon=-111.8&cnt=50&units=imperial&APPID=fc12319d19f952f36daba00a64416f2c').then((response) =>{   

            
                console.log(response);
                if(city && country){
                    
        this.setState({
            temperature: response.data.list[0].main.temp,
            city: response.data.name,
            country: response.data.list[0].sys.country,
            humidity: response.data.list[0].main.humidity,
            description: response.data.list[0].weather[0].description,
            error: ""
        })
    
        }else{
            this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error:'Please enter values.'
            })
              
 }})};
    render(){
        return(
            <div>
                <Navbar/>
                <div className='wrap'>
                <div className='main'>
                <div className='containter'>
                <div className='row'>
            <Titles />
            <Form getWeather={this.getWeather}/>
              <Weather temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}/>
                </div>
                </div>
                </div>
              </div>

            
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/titles' component={Titles}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>            
            </div>
        ); 
    }
}

export default withRouter(connect(state=>state,{})(App));