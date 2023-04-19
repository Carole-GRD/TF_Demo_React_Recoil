import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonEncode from './containers/person/person-encode'
// import PersonDisplay from './containers/person/person-display-v1'
import PersonDisplay from './containers/person/person-display-v2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Demo de l'utilisation de Recoil</h1>
      <PersonEncode />
      <PersonDisplay />
    </div>
  )
}

export default App
