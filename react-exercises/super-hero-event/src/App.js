import React from 'react';
import Button from './Button'

const App = () => {
    const sayHello = (e) => {
      e.preventDefault()
      console.log('hello there')
    }

    return (
      <div>
        <form >
         <input type='text' />
         <Button clickFunction={sayHello}/>
        </form>
      </div>
    );
}

export default App;