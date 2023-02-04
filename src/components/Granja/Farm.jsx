import React from 'react'
import DialogBox from '../../assets/dialogBox.png'
import Ruma from '../../assets/Ruma.svg'
import './granja.css'
import { useTypewriter } from 'react-simple-typewriter'
import { useState } from 'react'

const Farm = () => {

  const write = 'mucho gusto se que me extrañaste';


  const [dialog, setDialog] = useState(write)

  const [text] = useTypewriter({
    words: [`${dialog}`],
    loop: 1,
    typeSpeed: 50
  })

  return (
     <section className="h-screen farm-font">
       <div className='grid place-content-center backgroundImage  '>
      <div className='relative mt-64 animate__animated animate__fadeInUp '>
        <img src={DialogBox} alt="dialogBox" className='w-full max-w-3xl relative ' />
              <p className=' absolute max-w-[12.25rem] top-2 left-4 bottom-0 text-sm text-[#531A12] md:text-3xl md:left-6 md:top-4 md:max-w-[26rem]'>{text}</p>
        <img src={Ruma} className='absolute top-6 right-16 w-7 md:w-12 md:top-12 md:right-[8.3rem]' alt="Ruma" />
        <p className='absolute right-[4.75rem] bottom-[2.225rem] text-sm text-[#531A12] font-semibold md:text-3xl md:right-32 md:bottom-6'>Ruma</p>
      
      </div>
       </div>
    </section>
  )
}

export default Farm