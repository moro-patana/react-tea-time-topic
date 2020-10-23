import React, { useState } from "react"


function TopicList({ topic }) {
    const [upvotedCount, setUpvotedCount] = useState(0)
    const [downvotedCount, setDownvotedCount] = useState(0)
    return (
        <div className="container">
            <div className="article">
                <p>{topic.title}</p>
                <button className="archieve">Archieve</button>
            </div>
            <div className="vote">
                <div className="upvote">
                    <p>{upvotedCount}</p>
                    <button onClick={() => setUpvotedCount(upvotedCount + 1)}>+</button>
                </div>
                <div className="count-vote">
                    <p>{downvotedCount}</p>
                    <button onClick={() => setDownvotedCount(downvotedCount + 1)}>+</button>
                </div>
            </div>

        </div>
    )
}
export default TopicList;