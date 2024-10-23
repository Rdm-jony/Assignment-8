import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <div className='max-w-6xl mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  )
}

export default App
