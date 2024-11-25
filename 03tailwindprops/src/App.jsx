import Card from './components/Card'
import './App.css'

function App() {
  
  let myobj = {
    username:"hitesh",
    age: 21
  }

  let newArr = [1,2,3];
  return (
    <>
     <h1 className='bg-green-950'>Tailwind Testing</h1>
     <Card channel="chaiaurreact" someobje = {myobj} new = {newArr}/>
    </>
  )
}

export default App
