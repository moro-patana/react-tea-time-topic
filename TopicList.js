import React, { useState } from "react"


function TopicList() {
    const [upvotedCount, setUpvotedCount] = useState(0)
    const [downvotedCount, setDownvotedCount] = useState(0)
    return (
        <div>
            <div className="article">
                <p>LoremLoremLoremLoremLorem</p>
                <button>Archieve</button>
            </div>
            <div>
                <p>{upvotedCount}</p>
                <button onClick={() => setUpvotedCount(upvotedCount + 1)}>+</button>
            </div>
            <div>
                <p>{downvotedCount}</p>
                <button onClick={() => setDownvotedCount(downvotedCount + 1)}>+</button>
            </div>

        </div>
    )
}
export default TopicList;