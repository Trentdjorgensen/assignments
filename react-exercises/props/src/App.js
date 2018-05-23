import React from 'react';
import Welcome from './Welcome';

const App = () => {
    return(
        <div>
            <Welcome name='John'email='a@a.com'phoneNumber='123-1223-2222'/>
            <Welcome name='Tim'email='t@a.com'phoneNumber='23-1223-2222'/>
        </div>
    );
}

export default App;