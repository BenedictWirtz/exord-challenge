/* eslint-disable react/prop-types */
import { useState } from "react";


const DropDown = ({ placeholder, options }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(placeholder)

    console.log(isOpen)
    console.log(options)

    const handleSelect = (option) => {
        setSelected(option)
        console.log("Selected:" + selected)
        setIsOpen(false)
    }
    
    return(
        <div>
            <h1>Components</h1>
            <button onClick={() => setIsOpen(!isOpen)}>{placeholder}</button>
            {isOpen && (
                <ul>
                    {options.map((options, index) => (
                        <li key={index} onClick={() => handleSelect(options)}>
                            {options}
                        </li> 
                    ))}
                </ul>
            )}
        </div>
    )
}
export default DropDown;