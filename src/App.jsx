import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Content from './Content'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex w-full">
      {/* <h1>Hello world !</h1> */}
      <Sidebar />
      <div className='w-full'>
        <Topbar />  
        <Content />
      </div>
    </div>
  )
}

export default App
