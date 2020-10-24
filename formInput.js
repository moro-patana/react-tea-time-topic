import React, { useState } from "react"
import archieveIcon from "./img/archieve-icon.svg"
import voteIcon from "./img/vote-icon.svg"
import unvoteIcon from "./img/unvote-icon.svg"
import deleteIcon from "./img/delete-icon.svg"

function FormInput(props) {
    const [title, setTitle] = useState("")
    const [upvotes, setUpvotes] = useState(0)
    const [downvotes, setDownvotes] = useState(0)

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
}
const handleChange = (e) => {

}
    return (
            <div>
                <form>
                    <input 
                      type="text" 
                      placeholder="Wrirte your topic idea here"
                      onChange={((e) => setTitle(e.target.value))}
                      name="title"
                      value={title}
                    />
                    <button 
                     type="submit" 
                     className="submit-btn"
                     onClick={handleSubmit}>
                         Submit
                    </button>
                </form>
            </div>
    )
}
export default FormInput;