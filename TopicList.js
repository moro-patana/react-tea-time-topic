import React, { useState } from "react"
import archieveIcon from "./img/archieve-icon.svg"
import voteIcon from "./img/vote-icon.svg"
import unvoteIcon from "./img/unvote-icon.svg"


function TopicList({ topic }) {
    const [upvotedCount, setUpvotedCount] = useState([topic.upvotes])
    const [downvotedCount, setDownvotedCount] = useState(0)
    return (
        <div className="container">
            <div className="article">
                <p>{topic.title}</p>
                <button className="archieve"><img src={archieveIcon}/></button>
            </div>
            <div className="vote">
                <div className="upvote">
                    <p>{topic.upvotes}</p>
                    <button onClick={() => setUpvotedCount(upvotedCount + 1)}><img src={voteIcon}/></button>
                </div>
                <div className="count-vote">
                    <p>{topic.downvotes}</p>
                    <button onClick={() => setDownvotedCount(downvotedCount + 1)}><img src={unvoteIcon}/></button>
                </div>
            </div>

        </div>
    )
}
export default TopicList;