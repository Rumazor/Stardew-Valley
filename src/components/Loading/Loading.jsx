import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingBox from '../../assets/Loading.svg'
import { playSound } from '../../helpers/playSound'
import FallMusic from '../../music/Fall.ogg'

const Loading = () => {
  const [fade, setFade,] = useState(true)

    const navigate = useNavigate()
    useEffect(()=>{


        setTimeout(()=>{
            playSound(FallMusic)
            navigate('/farm')
        },3000)


        
      setTimeout(()=>{
  setFade(false)
      },2000)
      

    },[navigate,setFade])


  return (
    <div className='bg-black h-screen'>
        <img src={LoadingBox} className={` ${!fade && 'animate__animated animate__fadeOut'}  absolute w-60 md:w-auto  bottom-4 left-4`} alt="Loading" />
    </div>
  )
}

export default Loading