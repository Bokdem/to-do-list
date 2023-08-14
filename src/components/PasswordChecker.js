import React from "react";


export default function PasswordChecker() {
    const [formData, setFormData] = React.useState(
        {
            emailAddress: "",
            passWord: "",
            confirmPassWord: "",
            newsLetter: false
        }
    )
    function handleChange(event) {
        const {name, type, checked, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        if(formData.passWord === formData.confirmPassWord) {
            console.log("Succesfully signed up")
         } else {
            console.log("Passwords do not match")
            return
         }
         
        formData.newsLetter ? console.log("Thanks for signing up to the newsletter!") : console.log("")
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Email address"
                onChange={handleChange}
                name="emailAddress"
                value={formData.emailAddress}
            />
            <input
                type="text"
                placeholder="Password"
                onChange={handleChange}
                name="passWord"
                value={formData.passWord}
            />
            <input
                type="text"
                placeholder="Confirm password"
                onChange={handleChange}
                name="confirmPassWord"
                value={formData.confirmPassWord}
            />
            <input
                type="checkbox"
                onChange={handleChange}
                name="newsLetter"
                checked={formData.newsLetter}
                id="subcribeNewsletter"
            />
            <label htmlFor="subscribeNewsletter">I want to join the newsletter</label>
            <button onClick={handleFormSubmit}>Sign up</button>
        </form>
    )
}
