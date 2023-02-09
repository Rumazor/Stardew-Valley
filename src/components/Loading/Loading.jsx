import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import { playSound } from '../../helpers/playSound'
import LoadingAnimation from '../Loading/LoadingAnimation'

import Summer from '../../music/Summer.ogg'
import LoadingTips from './LoadingTips'

const Loading = () => {
 

    const navigate = useNavigate()
    useEffect(()=>{


        setTimeout(()=>{
            playSound(Summer)
            navigate('/farm')
        },4000)



    },[navigate])


  return (
    <div className='bg-black h-screen'>
        <LoadingTips/>
        <LoadingAnimation/>
    </div>
  )
}

export default Loading