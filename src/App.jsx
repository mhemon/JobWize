import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { createContext, useState } from 'react'

export const JobsContext = createContext([])
export const CartContext = createContext([])

function App() {
  const { jobs, initialCart } = useLoaderData()
  const [cart, setCart] = useState(initialCart)
  return (
    <JobsContext.Provider value={jobs}>
      <CartContext.Provider value={[cart, setCart]}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </CartContext.Provider>
    </JobsContext.Provider>
  )
}

export default App
