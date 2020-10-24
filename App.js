import React, { useState, useEffect } from "react"
import DiscussedTopics from "./discussedTopic.js"
import UndiscussedTopics from "./undiscussedTopics.js"
import FormInput from "./formInput.js"
const url = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json"

function App() {
    const [topics, setTopics] = useState([]);
    const getTopic = async() => {
        try {
         const res = await fetch(url);
         const topics = await res.json();
         setTopics(topics)
        } catch(e) {
         console.error(e);
        }
 }
 useEffect(() => {
    getTopic();
}, []) 

    const filterDiscussedTopic = topics.filter(topic => topic.discussedOn)
    console.log(filterDiscussedTopic);
    const filterUndiscussedTopic = topics.filter(topic => !topic.discussedOn)
    console.log(filterUndiscussedTopic);


function handleRemove(id) {
    const filterTopic = topics.filter(topic => topic.id !== id)
    setTopics(filterTopic)
console.log(id);
}
    return (
       <div>
            <FormInput/>
            <div>
                <h3>New Topics</h3>
                {filterUndiscussedTopic.map((topic) => (
                    <UndiscussedTopics key={topic.id} topic={topic}/>
            ))}
           </div>
       	<div>
               <h3>Past Topics</h3>
       	    {filterDiscussedTopic.map((topic) => (
               <DiscussedTopics key={topic.id} topic={topic} handleRemove={handleRemove}/>
            ))}
       	</div>
       </div>
    )
}
export default App;