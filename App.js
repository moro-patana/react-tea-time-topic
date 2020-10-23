import React, { useState, useEffect } from "react"
import TopicList from "./TopicList.js"
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


    return (
       <div>
           {topics.map((topic) => (<TopicList key={topic.id} topic={topic}/>))}
       </div>
    )
}
export default App;