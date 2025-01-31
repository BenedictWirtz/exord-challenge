/* eslint-disable react/prop-types */
import "./DropDown.css"
import { useState, useEffect, useRef } from "react";
import chevronIcon from "./assets/down-chevron.svg";


const DropDown = ({ placeholder, options }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(placeholder)
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    

    console.log(isOpen)
    console.log(options)

    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false)
            setHighlightedIndex(-1)
          }
        }

        const handleKeyDown = (event) => {
            if (isOpen) {
                event.preventDefault()
                if (event.key === "ArrowDown") {
                    setHighlightedIndex(prevIndex => Math.min(options.length - 1, prevIndex + 1)) 
                } else if (event.key === "ArrowUp") {
                    setHighlightedIndex(prevIndex => Math.max(0, prevIndex - 1)) 
                } else if (event.key === "Enter" && highlightedIndex >= 0) {
                    handleSelect(options[highlightedIndex]) 
                    setIsOpen(false)
                }
            }
        }
    
        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("keydown", handleKeyDown)
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside)
          document.removeEventListener("keydown", handleKeyDown)
        }
      }, [isOpen, highlightedIndex, options])

    

    const handleSelect = (option) => {
        setSelected(option)
        console.log("Selected:" + selected)
        setIsOpen(false)
        setHighlightedIndex(-1)
    }
    
    return(
        <div>
            <h1>Components</h1>
            <div className="dropdown" ref={dropdownRef}>
                <button className={selected !== placeholder ? "selected" : ""} onClick={() => setIsOpen(!isOpen)}>
                    {selected}
                    <img
                        src={chevronIcon} // Use imported chevron SVG
                        alt="Chevron"
                        className={`chevron ${isOpen ? "rotate" : ""}`} // Apply rotate class for spinning
                    />
                </button>
                {isOpen && (
                    <ul className="dropdown-list">
                        {options.map((option, index) => (
                            <li key={index} className={option === selected ? "selected" : ""} onClick={() => handleSelect(option)} 
                            style={{
                                backgroundColor: index === highlightedIndex ? '#f0f0f0' : '', 
                            }}>
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