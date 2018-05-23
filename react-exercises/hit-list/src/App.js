import React, {Component} from 'react';
import axios from'axios';

class App extends Component {
    constructor(){
        super();

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://api.vschool.io:6543/hitlist.json').then(response => {
            this.setState({data: response.data})
            console.log(this.state.data)
        })
    }
    render() {
        const myData = this.state.data.map(hit => {
            return <div class="box">
                <h1>{hit.name} </h1>
                <img src={hit.image} width="300"/>
            </div>
        })
        return(
            <div>
                {myData}
            </div>
        )
    }
}



export default App;