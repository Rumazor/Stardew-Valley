import React from 'react'
import {  useNavigate } from 'react-router-dom'
import './menu.css'


const Menu = () => {
  const navigate = useNavigate()
  return (
    <main className=' backgroundMenu'>
      <div className='grid place-content-center h-screen relative'>
      <div>
        <button onClick={()=>{
          
          navigate("/Loading")
        }} className='text-6xl text-[#531A12] mb-10 menu-font'>BIENVENIDO</button>
      </div>
      </div>
    </main>
  )
}

export default Menu