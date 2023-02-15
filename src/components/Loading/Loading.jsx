import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { playSound } from '../../helpers/playSound'
import LoadingAnimation from '../Loading/LoadingAnimation'
import MusicBox from '../../music/MusicBoxSong.ogg'
import LoadingTips from './LoadingTips'
import { useSelector } from 'react-redux'

const Loading = () => {
const navigate = useNavigate()

const {route} = useSelector((state) => state.Routes)


    useEffect(()=>{
        setTimeout(()=>{

            if(route === '/mashwinRoute'){
              playSound(MusicBox)
              navigate(`${route}`)
            } else {
              navigate(`${route}`)
            }
        },4000)
    },[navigate,route])


  return (
    <div className='bg-black h-screen'>
        <LoadingTips/>
        <LoadingAnimation/>
    </div>
  )
}

export default Loading