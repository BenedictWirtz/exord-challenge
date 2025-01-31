import './App.css'
import DropDown from './DropDown'

function App() {
  

  return (
    <>
      <DropDown 
      placeholder="Select option"
      options={["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]}
      />
    </>
  )
}

export default App
