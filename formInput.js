import React from "react"
function FormInput() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Wrirte your topic idea here"/>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    )
}
export default FormInput;