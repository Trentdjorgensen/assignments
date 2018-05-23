import React from 'react';
import Welcome from './Welcome';

const App = () => {

    
        

    return(
        <div className="one">
            <Welcome title='The Darkness' theme='Horror' time='90 minutes' backgroundColor='blue'/>
    
            <Welcome title='Silent Hill' theme='Horror' time='96 minutes' backgroundColor='red' />
        
            <Welcome  title='Ghost Busters' theme='Comedy' time='80 minutes'backgroundColor='yellow'/>
    
            <Welcome title='Pokemon Movie' theme='Kids' time='100 minutes' backgroundColor='green'/>
        
            <Welcome  title='The Mask' theme='Comedy' time='85 minutes'backgroundColor='purple'/>
    
            <Welcome title='Stuart Little' theme='Family' time='120 minutes'backgroundColor='orange' />

            <Welcome  title='The Advengers' theme='Action' time='76 minutes' backgroundColor='violet'/>

            <Welcome title='Daddy Day Care' theme='Comedy' time='100 minutes'backgroundColor='tan' />

            <Welcome  title='The Witch' theme='Horror' time='80 minutes'backgroundColor='black'/>

            <Welcome  title='The One' theme='Action' time='90 minutes' backgroundColor='teal' />
        </div>
    )
}

export default App;