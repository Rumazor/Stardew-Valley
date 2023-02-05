import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import {AiOutlineLinkedin, AiOutlineGithub , AiOutlineTwitter} from 'react-icons/ai'

import bigSelect from '../../music/bigSelect.wav'
import loadGame from '../../assets/LoadGame.svg'
import LoadingBox from '../../assets/Loading.svg'
import Logo from '../../assets/Logo.svg'
import './menu.css'

const Menu = () => {
  const [loading, setLoading] = useState(true)
  const [loadingBar, setLoadingBar] = useState(true)
  
const playAudio = (audioFile) => {
  const audio = new Audio(audioFile);
  audio.volume= 0.5
  audio.play();
};

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 2500);

    setTimeout(()=>{
  setLoadingBar(false)
      playAudio(bigSelect)
    },1500)

  },[])

  const navigate = useNavigate()
  if(loading) {
    return  <div className={` bg-black h-screen `}>
        <img src={LoadingBox} className={ ` ${!loadingBar && 'animate__animated animate__fadeOut'} absolute w-60 md:w-auto bottom-4 left-4`} alt="Loading" />

    </div>
  }

  return (
    <main className='relative bg-black animate__animated animate__fadeIn animate__slow backgroundMenu'>
      <div className='grid place-content-center h-screen relative'>
     <div className='mb-28'>
         <img src={Logo} className='py-8 animate__animated animate__fadeIn animate__slower ' alt="stardewvalley logo" />
      <div className='flex justify-center '>
        <button className='animate__animated animate__fadeInUp animate__slower' onClick={()=>{
          playAudio(bigSelect)
          navigate("/Loading")
        }}>
          <img src={loadGame}  className='cursor-pointer cursorLoad w-full max-w-[9.25rem] hover:brightness-110' alt="load game" />
        </button>
       
      </div>
       <div className='flex justify-center items-center gap-2 text-[#531A12] mt-8 text-4xl animate__animated animate__fadeInUp animate__slower  '>
         
        <a href="https://github.com/Rumazor" target='_blank' rel="noreferrer">
           <AiOutlineGithub  className='hover:brightness-150' />
        </a>
        <a href="https://www.linkedin.com/in/rumazor/" target='_blank' rel="noreferrer">
           <AiOutlineLinkedin  className='hover:brightness-150' />
        </a>
        <a href="https://twitter.com/ruma2084" target='_blank' rel="noreferrer">
           <AiOutlineTwitter  className='hover:brightness-150' />
        </a>

        </div>
     </div>
      </div>
     <footer className=' relative bottom-8 pl-4 farm-font text-2xl'>
         <p className='text-left text-[#531A12]'>© Stardew Valley fue Creado por <a href="https://www.stardewvalley.net" target='_blank' rel="noreferrer" >Eric Barone (Concernedape).</a> </p>
      </footer>
    </main>
  )
}

export default Menu