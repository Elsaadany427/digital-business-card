import { useState } from 'react'
import Info from './Components/Info/Info'
import About from './Components/About/About'
import Interest from './Components/Interests/Interest'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      {/* Info Component*/}
      <Info />
      <div className='container'>
        {/* About */}
        <About />
        {/* Interests */}
        <Interest />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
