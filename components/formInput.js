import React from "react"

function FormInput({topics, setTopics}) {
    const handleSubmit = (e) => {
        e.preventDefault();
      const newTopic = {
            title: e.target.title.value,
            upvotes: 0,
            downvotes: 0,
            id: Date.now()
        }
        topics.push(newTopic)
        setTopics([...topics])
    }

    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                      type="text" 
                      placeholder="Wrirte your topic idea here"
                      name="title"
                    />
                    <button 
                     type="submit" className="submit-btn">
                         Submit
                    </button>
                </form>
            </div>
    )
}
export default FormInput;