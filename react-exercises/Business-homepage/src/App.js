import React from 'react';
import './index.css';
import Content from './Content';
import Footer from './Footer';
import Navbar from './Navbar';



const App = () => {
    return (
        <div>
        <Navbar/>
        <Content/>
        <Footer/>
        </div>
    );
};

export default App;