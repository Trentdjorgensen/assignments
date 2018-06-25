import React,{Component} from 'react';
import Form from './Form';
import './index.css';
import {connect} from 'react-redux';
import {getForm} from './redux';


class App extends Component{

    render(){

        return(
        <div>
            <div className='div1'>
                <h1>HEATING AND AIR CONDITIONING REPAIR</h1>
            </div>

            <br/>

                <div className='img1'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/2/2a/Condensing_furnace_diagram.png' alt=''/>
                </div>

            <div>
            <div className='p1'>
                <b>Furnace types</b>

                <br/>

                <p>
                <b>Single-stage</b>
                    - A single-stage furnace has only one stage of operation, it is either on or off. This means that it is relatively noisy, always running at the highest speed, and always pumping out the hottest air at the highest velocity.
                    One of the benefits to a single-stage furnace is typically the cost for installation. Single-stage furnaces are relatively inexpensive since the technology is rather simple.</p>
                </div>

                <br/>

                <div className='p2'>
                <b>Two-stage</b>
                    <p>    - A two-stage furnace has two stages of operation, full speed and half  speed. Depending on the demanded heat, they can run at a lower speed most of the time. They can be quieter, move the air at less velocity, and will better keep the desired temperature in the house.</p>
                </div>   

                <br/>

                <div className='p3'>
                <p><b>Modulating</b>
                    - A modulating furnace can modulate the heat output and air velocity nearly continuously, depending on the demanded heat and outside temperature. This means that it only works as much as necessary and therefore saves energy.</p>
                </div> 
            </div>

            <br/>
            
            <div className='ac'>
                <p><b>A/C Air conditioning</b> - is the process of removing       heat     and moisture from the       interior of an occupied space, to improve             the comfort of occupants. Air                conditioning can be used in both domestic     and commercial environments. This process is         most commonly used to          achieve a more comfortable interior environment, typically          for humans       and animals; however, air conditioning is also used to cool/dehumidify            rooms filled with heat-producing electronic devices, such as computer       servers,               power amplifiers, and even to display and store artwork.
                    Air conditioners often use a fan to distribute the conditioned air to an occupied space such as a building or a car to improve thermal comfort and indoor air quality. Electric refrigerant-based AC units range from small units that can cool a small bedroom, which can be carried by a single adult, to massive units installed on the roof of office towers that can cool an entire building. The cooling is typically achieved through a refrigeration cycle, but sometimes evaporation or free cooling is used. Air conditioning systems can also be made based on desiccants and subterraneous pipes that can distribute the heated refrigerant to the ground for cooling.
                    In the most general sense, air conditioning can refer to any form of technology that modifies the condition of air. In common usage, though, "air conditioning" refers to systems which cool air. In construction, a complete system of heating, ventilation, and air conditioning is referred to as hvac.</p>
            </div>

                <div className='img2'>
                    <img src='https://s.hswstatic.com/gif/how-to-troubleshoot-a-central-air-conditioning-system-1.jpg' alt=''/>
                </div>

            <br/>

                <div className='form'>   
                    <Form/>
                </div>  

        </div>
        )
    }
}
    const mapStateToProps = state =>{
        return{
            forms: state.form
        }
    }

export default connect(mapStateToProps,{getForm})(App);