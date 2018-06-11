import React, {Component} from 'react';
import {Search} from './Search';

class Search extends Component {
    constructor(){
        super();

        this.search = new Search();
            this.state = {results:[]}

    }
    componentDidMount(){
        this.search.getResults().subcribe(res =>{
            this.setState({results:res});
        });
    }
    search(event){
        this.search.search({value:event.target.value.trim()});
    }
    render(){

    let results = this.state.results.map(res => {
        return
            <li className='list-group-item' key={res.title}>
            <a href={res.friendlyUrl}>{res.title}</a>
            </li>
        
    });
    return(
        <div className='form-group'>
        <h4>Search</h4>
        <input className='form-control' placeholder='Search Term' type='text' onchange={this.search.bind(this)}/>
        <ul className='list-group'>
        {results}
        </ul>
        </div>

    );
}
}

export default Search;