/* eslint-disable react/prop-types */
import "./DropDown.css"
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
            <div className="dropdown">
                <button className={selected !== placeholder ? "selected" : ""} onClick={() => setIsOpen(!isOpen)}>{selected}</button>
                {isOpen && (
                    <ul className="dropdown-list">
                        {options.map((option, index) => (
                            <li key={index} className={option === selected ? "selected" : ""} onClick={() => handleSelect(option)}>
                                {option}
                            </li> 
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
export default DropDown;