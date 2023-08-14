import React from "react"

export default function FormsInReact() {

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

    function handleChange(event) {
        const {name, value, checked, type} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    return (
        <>
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