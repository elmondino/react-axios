import React from 'react';
import axios from 'axios';

class FetchData extends React.Component {
    state = {
        persons: ''
    }
    getData() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then( (response) => {
                this.setState({
                    persons: response.data
                }) 
            })
            .catch((error) => {
                console.log(error);
            })
    }
    componentDidMount() {
        this.getData();
    }
    render(){
        let displayData = this.state.persons.length ? (this.state.persons[0].name) : ("fetching data")
        return (
            <div><h1>{displayData}</h1></div>
        )
    }
}

export default FetchData;