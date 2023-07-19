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
    
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            eMail: "",
            comments: "",
            isFriendly: true,
            employment: ""
        }
    )
    
    console.log(formData)

    function handleChange(event) {
        const {name, value, checked, type} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

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

            <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="eMail"
                value={formData.eMail}
            />
            <textarea 
                placeholder="Comments here"
                onChange={handleChange}
                name="comments"
                value={formData.comments} />
            <input
                type="checkbox"
                name="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                id="isFriendly"
            ></input>
            <label htmlFor="isFriendly">Are you friendly?</label>

            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                /> <label htmlFor="unemployed">Unemployed</label>
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                /> <label htmlFor="part-time">Part-time</label>
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                /> <label htmlFor="full-time">Full-time</label>
            </fieldset>
        </form>
        </>
    )
}


// https://customsearch.googleapis.com/customsearch/v1?key=AIzaSyBd8VdLkN0fDgS7G7NvHeZ40RAfA7Zd6CE&cx=f1160392f50d64a88&q=shoes