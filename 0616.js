import { useState } from 'react';

function App () {
  const [count, setCount] = useState(1)
  const [name, setName] = useState('')

  const handleCountUpdate = () => {
    setCount(count + 1)
  }

  const handleInputChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span> count : {count}</span>
      <br />
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name : {name}</span>
    </div>
  )
}

export default App
