import { useState } from "react";

// eslint-disable-next-line react/prop-types
const DropDown = ({ placeholder, options }) => {
    const [isOpen, setIsOpen] = useState(false)

    console.log(isOpen)
    console.log(options)
    
    return(
        <div>
            <h1>Components</h1>
            <button onClick={() => setIsOpen(!isOpen)}>{placeholder}</button>
        </div>
    )
}
export default DropDown;