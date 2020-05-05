import React, {useState, useEffect} from 'react';
import axios from 'axios';

const FetchData = () => {
    const [users, setUsers] = useState(null);

    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then( (response) => {
                setUsers(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        getData()
    }, [])
    
    let displayData = users.length ? (users[0].name) : ("fetching data")
    return (
        <div><h1>{displayData}</h1></div>
    )
}

export default FetchData;