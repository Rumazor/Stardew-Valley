import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { playSound } from '../../helpers/playSound'
import LoadingAnimation from '../Loading/LoadingAnimation'
import MusicBox from '../../music/MusicBoxSong.ogg'
import LoadingTips from './LoadingTips'

const Loading = () => {
 

    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            playSound(MusicBox)
            navigate('/mashwinRoute')
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