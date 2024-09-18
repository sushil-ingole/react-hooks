import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import MyContext from './UseContext'

function App() {
  const contextValue = 'Hello from context';
  return (
    <>
      <MyContext.Provider value={contextValue}>
        <Navbar />
        <div className='content'>
          <Outlet />
        </div>
      </MyContext.Provider>
    </>
  )
}

export default App
