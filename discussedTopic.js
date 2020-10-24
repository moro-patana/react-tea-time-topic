import React from "react"
import deleteIcon from "./img/delete-icon.svg"


function DiscussedTopics({ topic, handleRemove }) {
    const discussedOnDate = new Date(Number(topic.discussedOn));

    return (
         <div className="container">
             <div className="article">
                 <p>{topic.title}</p>
                <button className="delete" onClick={() => handleRemove(topic.id)}><img className="icon" src={deleteIcon}/></button>
            </div>
            <p className="discussedOnDate">Discussed on {discussedOnDate.toLocaleDateString()}</p>
        </div>
    )
}
export default DiscussedTopics;