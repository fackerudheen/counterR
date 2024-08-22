import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='d-flex align-items-center justify-content-center w-100 flex-column'
        style={{ height: '100vh' }}>
        <div className='d-flex align-items-center justify-content-center   flex-column p-5 rounded'
          style={{ backgroundColor: 'white' }}>
          <h2 className='text-primary'>Counter application</h2>
          <Counter/>
          
        </div>
      </div>
    </>
  )
}

export default App
