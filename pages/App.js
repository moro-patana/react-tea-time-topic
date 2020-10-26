import React, { useState, useEffect } from "react"
import DiscussedTopics from "../components/discussedTopic"
import UndiscussedTopics from "../components/undiscussedTopics.js"
import FormInput from "../components/formInput.js"
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
    const filterUndiscussedTopic = topics.filter(topic => !topic.discussedOn)


    const sorteTopic = filterUndiscussedTopic.sort((topicsA, topicsB) => {
        const ratioA = topicsA.upvotes - topicsA.downvotes;
        const ratioB = topicsB.upvotes - topicsB.downvotes;
        return ratioB - ratioA;
  });
 

function handleRemove(id) {
    const filterTopic = topics.filter(topic => topic.id !== id)
    setTopics(filterTopic)
}
function handleArchieveTopic(id) {
    const archieve = topics.find(topic => topic.id === id)
   archieve.discussedOn = Date.now();
   setTopics([...topics])
}

    return (
       <div>
            <FormInput
            topics={topics}
            setTopics={setTopics}
            />
            <div>
                <h3>New Topics</h3>
                {sorteTopic.map((topic) => (
                    <UndiscussedTopics key={topic.id} topic={topic} handleArchieveTopic={handleArchieveTopic} />
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