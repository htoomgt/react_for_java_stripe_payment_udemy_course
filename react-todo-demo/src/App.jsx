import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
          
        </div>
        <div className="card-body">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Description</th>
              <th scope='col'>Assigned</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row '>1</th>
              <td>Feed dog</td>
              <td>Eric</td>
            </tr>
            <tr>
              <th scope='row '>2</th>
              <td>Get haircut</td>
              <td>Eric</td>
            </tr>
          </tbody>
        </table>
        </div>
        
      </div>
    </div>
  )
}

export default App
