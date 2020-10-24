import React from "react"
import deleteIcon from "./img/delete-icon.svg"


function DiscussedTopics({ topic, handleRemove }) {
    return (
         <div className="container">
             <div className="article">
                 <p>{topic.title}</p>
                <button className="delete" onClick={() => handleRemove(topic.id)}><img className="icon" src={deleteIcon}/></button>
            </div>
            <p>{topic.discussedOn}</p>
        </div>
    )
}
export default DiscussedTopics;