import React from 'react';

class Nav extends React.Component{
    render(){
        return(
            <div>
                <div className="sidenav">
                    <a href="/App">Home</a>
                    <br/>
                    <a href="/Contact">Contact</a>
                </div>  
            </div>
        )
    }
}

export default Nav;