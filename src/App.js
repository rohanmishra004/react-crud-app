import './App.css';
import { useState } from 'react';

function App() {
  // const [showText, setShowText] = useState(true)

  const [counter, setCount] = useState(0)

  const increaseCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decreaseCount = () => {
    setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0)
  }

  const setToZero = () => {
    setCount(counter > 0 ? 0 : alert('counter already zero'))
  }



  return (
    <div className="App">
      <button onClick={increaseCount}>Increase</button>
      <br />
      <button onClick={decreaseCount}>Decrease</button>
      <br />
      <button onClick={setToZero}>SetToZero</button>
      <br />

      {counter}
      {/* {showText === true && <p>Hi My name is Rohan</p>} */}
    </div>
  );
}

export default App;
