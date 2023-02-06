import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import {AiOutlineLinkedin, AiOutlineGithub , AiOutlineTwitter} from 'react-icons/ai'

import bigSelect from '../../music/bigSelect.wav'
import loadGame from '../../assets/LoadGame.svg'
// import LoadingBox from '../../assets/Loading.svg'
import Cargando from '../Loading/Cargando'
import Logo from '../../assets/Logo.svg'
import './menu.css'

const Menu = () => {
  const [loading, setLoading] = useState(true)
  const [loadingBar, setLoadingBar] = useState(true)
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
    }, 3500);

    setTimeout(()=>{
  setLoadingBar(false)
      playAudio(bigSelect)
    },2500)

  },[])

  const navigate = useNavigate()
  if(loading) {
    return  <div className={` bg-black h-screen `}>
        {/* <img src={LoadingBox} className={ ` ${!loadingBar && 'animate__animated animate__fadeOut'} absolute w-60 md:w-auto bottom-4 left-4`} alt="Loading" /> */}
    <div>
      <Cargando/>
    </div>
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
          // navigate("/Loading")
        }}>
          <img src={loadGame}  className='cursor-pointer cursorLoad w-full max-w-[9.25rem] hover:brightness-110' alt="load game" />
        </button>
       


{isOpen && (
        <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Modal Title
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm leading-5 text-gray-500">
                      Modal body text goes here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5" onClick={handleClose}>
Close
</button>
</span>
</div>
</div>
</div>
)}















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
  </>
  )
}

export default Menu