import React from 'react'
import "./granja.css";
import DialogBox from '../../assets/dialogBox.png'
import music from '../../music/13 Summer.ogg'

const GranjaComponent = () => {

    const playSound = () => {
    const audioElement = new Audio(music);
    audioElement.volume = 0.8;
    audioElement.play();
  };




  return (
    <section className="h-screen">
       <div className='grid place-content-center backgroundImage  '>
      <div className='relative mt-10'>
        <img src={DialogBox} alt="" className='w-full max-w-3xl relative ' />
              <p className='absolute max-w-[14.25rem] top-2 left-4 bottom-0 text-xl text-[#531A12] md:text-3xl md:left-6 md:top-4 md:max-w-[26rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dicta recusandae dolore corrupti doloribus qui, rem harum impedit enim fugiat!</p>
      <button className='' onClick={() => playSound()}>bottom</button>
      </div>
       </div>
    </section>
  )
}

export default GranjaComponent