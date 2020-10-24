import React, { useState } from "react"
import archieveIcon from "./img/archieve-icon.svg"
import voteIcon from "./img/vote-icon.svg"
import unvoteIcon from "./img/unvote-icon.svg"
import deleteIcon from "./img/delete-icon.svg"

function FormInput({topics, setTopics}) {
    const handleSubmit = (e) => {
        e.preventDefault();
      const newTopic = {
            title: e.target.title.value,
            upvotes: 0,
            downvotes: 0,
            id: Date.now()
        }
        topics.push(newTopic)
        setTopics([...topics])
        console.log("submitted");
    }

    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                      type="text" 
                      placeholder="Wrirte your topic idea here"
                      name="title"
                    />
                    <button 
                     type="submit" className="submit-btn">
                         Submit
                    </button>
                </form>
            </div>
    )
}
export default FormInput;