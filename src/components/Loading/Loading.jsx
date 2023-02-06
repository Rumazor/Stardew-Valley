import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingBox from '../../assets/Loading.svg'
import { playSound } from '../../helpers/playSound'
import Cargando from '../Loading/Cargando'

import Summer from '../../music/Summer.ogg'

const Loading = () => {
  const [fade, setFade,] = useState(true)

    const navigate = useNavigate()
    useEffect(()=>{


        setTimeout(()=>{
            playSound(Summer)
            navigate('/farm')
        },3000)


        
      setTimeout(()=>{
  setFade(false)
      },2000)
      

    },[navigate])


  return (
    <div className='bg-black h-screen'>
        {/* <img src={LoadingBox} className={` ${!fade && 'animate__animated animate__fadeOut'}  absolute w-60 md:w-auto  bottom-4 left-4`} alt="Loading" /> */}
        <Cargando/>
    </div>
  )
}

export default Loading