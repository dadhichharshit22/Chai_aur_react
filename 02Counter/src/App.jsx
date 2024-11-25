import { useState } from 'react';
import './App.css'

function App() {
//  let Counter = 5;

  const [counter,setCounter] = useState(15);

 const addValue = () => {
  if(counter === 20){
    setCounter(20);
  }
  else{
    console.log('Clicked',counter);
    setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter + 1);
  }

 }

 const removeValue = () =>{
  if(counter === 0){
    setCounter(0);
  }
  else{
    console.log('Clicked',counter);
    setCounter(counter - 1);
  }

 }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Increase Value {counter}</button>
      <br/>
      <button onClick={removeValue}>Descrease Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
