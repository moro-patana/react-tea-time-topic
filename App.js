import React, { useState, useEffect } from "react"
import TopicList from "./TopicList.js"
const TopicData = "https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json"

function App() {
    const [topics, setTopics] = useState([]);
    const getTopic = async() => {
        try {
         const res = await fetch(TopicData);
         const topics = await res.json();
         console.log(topics);
         setTopics(topics.results)
        } catch(e) {
         console.error(e);
        }
 }
 useEffect(() => {
    getTopic();
}, [])


    return (
       <div>
           <TopicList/>
       </div>
    )
}
export default App;