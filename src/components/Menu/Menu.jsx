import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineLinkedin, AiOutlineGithub , AiOutlineTwitter} from 'react-icons/ai'
import {SiKofi} from 'react-icons/si'

import bigSelect from '../../music/bigSelect.wav'
import bigDeSelect from '../../music/bigDeSelect.wav'
import loadGame from '../../assets/LoadGame.svg'
// import LoadingBox from '../../assets/Loading.svg'
import LoadingAnimation from '../Loading/LoadingAnimation'
import Logo from '../../assets/Logo.svg'
import backButton from '../../assets/backButton.svg'
import RumaRoute from '../../assets/RumaRoute.svg'
import RaquelRoute from '../../assets/RaquelRoute.svg'
import LoadingTips from '../Loading/LoadingTips'

import './menu.css'

const Menu = () => {
const [loading, setLoading] = useState(true)
const [isOpen, setIsOpen] = useState(false);
const handleOpen = () => setIsOpen(true);
const handleClose = () => setIsOpen(false);

const playAudio = (audioFile) => {
const audio = new Audio(audioFile);
audio.volume= 0.5
audio.play();
};

useEffect(()=>{
setTimeout(() => {
setLoading(false)
}, 4500);

setTimeout(()=>{
playAudio(bigSelect)
},3500)

},[])

const navigate = useNavigate()
if(loading) {
return <div className={` bg-black h-screen `}>
    <LoadingTips/>
    <LoadingAnimation />
</div>
}


return (
<>
  <main className='relative bg-black animate__animated animate__fadeIn animate__slow backgroundMenu'>
    <div className='grid place-content-center h-screen relative'>
      <div className='mb-28'>
        <img src={Logo} className='py-8 animate__animated animate__fadeIn animate__slower ' alt="stardewvalley logo" />
        <div className='flex justify-center '>
          <button className='animate__animated animate__fadeInUp animate__slower' onClick={()=>{
            playAudio(bigSelect)
            handleOpen()
            }}>
            <img src={loadGame} className='cursor-pointer transition-all cursorLoad w-full max-w-[9.25rem] hover:brightness-110 hover:scale-110'
              alt="load game" />
          </button>


          {/* // MODAL // */}
          {isOpen && (
          <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center z-50">
            <div className="fixed inset-0 transition-opacity ">
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div
              className="bg-white rounded-lg shadow-xl transform transition-all sm:max-w-lg sm:w-full modal h-[31.1875rem] min-w-[52rem]  ">
                  <img src={RumaRoute}  className='absolute top-0 p-3 right-0 left-0 hover:brightness-110 transition-all cursorLoad' alt="Ruma Route" />
                  <img src={RaquelRoute} onClick={() =>{
                     navigate("/Loading")
                  }}className='absolute top-[7.56rem] p-3 right-0 left-0 hover:brightness-110 transition-all cursorLoad' alt="Mashwim route" />
            </div>
             <button type="button"
                className="inline-flex absolute bottom-20 justify-center w-full rounded-md border border-transparent px-4 py-2"
                onClick={() =>{
                  handleClose()
                    playAudio(bigDeSelect)
                }}>
              <img src={backButton} className='cursor-pointer transition-all cursorLoad  hover:brightness-110 hover:scale-110' alt="back button" />
              </button>
          </div>
          )}

        </div>
        <div
          className='flex justify-center items-center gap-2 text-[#531A12] mt-8 text-4xl animate__animated animate__fadeInUp animate__slower  '>

          <a href="https://github.com/Rumazor" target='_blank' rel="noreferrer">
            <AiOutlineGithub className='hover:brightness-150' />
          </a>
          <a href="https://www.linkedin.com/in/rumazor/" target='_blank' rel="noreferrer">
            <AiOutlineLinkedin className='hover:brightness-150' />
          </a>
          <a href="https://twitter.com/ruma2084" target='_blank' rel="noreferrer">
            <AiOutlineTwitter className='hover:brightness-150' />
          </a>
          <a href="https://ko-fi.com/rumazor" target='_blank' rel="noreferrer">
            <SiKofi className='hover:brightness-150' />
          </a>

        </div>
      </div>
    </div>
    <footer className=' relative bottom-8 pl-4 farm-font text-2xl'>
      <p className='text-left text-[#531A12]'>© Stardew Valley fue Creado por <a href="https://www.stardewvalley.net"
          target='_blank' rel="noreferrer">Eric Barone (Concernedape).</a> </p>
    </footer>
  </main>
</>
)
}

export default Menu