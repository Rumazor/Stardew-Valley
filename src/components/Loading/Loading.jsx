import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingBox from '../../assets/Loading.svg'
import { playSound } from '../../helpers/playSound'


const Loading = () => {
    const navigate = useNavigate()
    useEffect(()=>{
          
        setTimeout(()=>{
            playSound()
            navigate('/farm')
        },3000)
    },[navigate])


  return (
    <div className='bg-black h-screen'>
        <img src={LoadingBox} className='absolute bottom-4 left-4' alt="Loading" />

    </div>
  )
}

export default Loading