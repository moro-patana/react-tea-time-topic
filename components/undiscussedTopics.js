import React, { useState } from "react"
import archieveIcon from "../img/archieve-icon.svg"
import voteIcon from "../img/vote-icon.svg"
import unvoteIcon from "../img/unvote-icon.svg"


function UndiscussedTopics({topic, handleArchieveTopic}) {
    const [upvotedCount, setUpvotedCount] = useState(topic.upvotes)
    const [downvotedCount, setDownvotedCount] = useState(topic.downvotes)

    return (
        <div className="container">
        <div className="article">
            <p>{topic.title}</p>
           <button className="archieve" onClick={() => handleArchieveTopic(topic.id)}><img className="icon" src={archieveIcon}/></button>
       </div>
       <div className="vote">
           <div className="upvote">
               <p>{upvotedCount}</p>
               <button className="btn vote-btn" onClick={() => setUpvotedCount(upvotedCount + 1)}><img className="icon" src={voteIcon}/></button>
           </div>
           <div className="count-vote">
               <p>{downvotedCount}</p>
               <button className="btn unvote-btn" onClick={() => setDownvotedCount(downvotedCount + 1)}><img className="icon" src={unvoteIcon}/></button>
           </div>
       </div>
   </div>

    )
}
export default UndiscussedTopics;