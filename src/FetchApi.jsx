import React, {useEffect, useState} from "react"
import axios from "axios"
import './usercard.css';

export default function FetchApi() {
    // const BASE_URL = "https://customsearch.googleapis.com/customsearch/v1"
    // const API_KEY = "AIzaSyBd8VdLkN0fDgS7G7NvHeZ40RAfA7Zd6CE"
    // const SEARCH_KEY = "f1160392f50d64a88"

    const [data, setData] = useState([])
    useEffect(() => {
        // axios.get(`${BASE_URL}?key=${API_KEY}&cx=${SEARCH_KEY}&q=shoes`)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setData(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    
    const [usersShown, setUsersShown] = useState(1)
    // console.log(maxSlice)
    const userList = data.slice(0, usersShown).map((user) => 
        <div key={user.name} className="usercard">
            <h1>{user.username}</h1>
            <p>Name: {user.name}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
            <p>{user.address.street}</p>
            <p>{user.address.suite}</p>
            <p>{user.address.zipcode}</p>
            <p>{user.company.name}</p>
            <p>{user.company.catchPhrase}</p>
            <p>{user.company.bs}</p>
        </div>
    );

    return (
        <>
            <p>Fetch something!</p>
            <button style={{ display: usersShown < 10 ? "block" : "none" }} onClick={() => setUsersShown(usersShown + 1)}>Fetch me 1 more user!</button>
            <button style={{ display: usersShown > 1 ? "block" : "none" }} onClick={() => setUsersShown(usersShown - 1)}>Fetch me 1 less user!</button>
            <div className="cards-wrapper">
                {userList}
            </div>


        </>
    )
}


// https://customsearch.googleapis.com/customsearch/v1?key=AIzaSyBd8VdLkN0fDgS7G7NvHeZ40RAfA7Zd6CE&cx=f1160392f50d64a88&q=shoes