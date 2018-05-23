import React from 'react';

class App extends Comment {
    constructor(){
        super();
        this.state = {
            data: [],
            text: '',
            color: 'blue',
            open: false
        }
        this.handleChangColor = this.handleChangColor.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown',this.handleChangColor);
    }

    conponentDidMount() {
        window.addEventListener('keydown', this.handleChangColor);
    }

    handleChangColor(e){
        console.log(e)
        switch(e.code){
            case "ArrowUp":
                    this.setState({ color: 'red', text: e.code });
                break;
            case "ArrowDown":
                this.setState({ color: 'yellow', text: e.code });
                break;
            case "ArrowLeft":
                this.setState({ color: 'gray', text: e.code });
                break;
            case "ArrowRight":
                this.setState({ color: 'green',text: e.code});
                break;
        }
    }

    render(){

        const style = {
            height: this.state.open ? '280px' : '0'
        }
        console.log(this.props.stuff)
        return (
            <div>
                <box {...this.state} />
            </div>
        )

    }

}

export default App;