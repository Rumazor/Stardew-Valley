import React, { useEffect } from 'react'
import DialogBox from '../../assets/dialogBox.png'
import Ruma from '../../assets/Ruma.svg'
import './granja.css'
import { useState } from 'react'

const Farm = () => {
  const [index, setIndex] = useState(0);
  const [dialog] = useState(['(Comienza con Ruma sentado en una silla con un papel y una pluma en la mano).', 'Querida Raquel, sé que te preocupas mucho por la granja Urgot y por los animales que dejaste allí. Pero quiero que sepas que aunque el otoño ha llegado, todo sigue estando bien.','(Ruma se detiene un momento y mira al papel).','El otoño ha sido un poco difícil para la granja, pero he estado haciendo todo lo posible para mantenerla en buen estado. Rocinante y los demás animales están bien, y extrañan mucho tu presencia.','(Ruma sonríe al pensar en los animales).','La granja necesita un poco de atención, es verdad, pero estoy aquí para cuidar de todo. No te preocupes, no es nada que no podamos arreglar juntos cuando regreses.','(Ruma mira al cielo y suspira).','Sé que tu trabajo es importante, pero quiero que sepas que estoy aquí para ayudar en lo que sea necesario. Te extraño mucho, Raquel, y estoy ansioso por tu regreso.','(susurrando) Espero que esto te alivie un poco de la preocupación laboral que tienes. Te quiero, Raquel.']);

const [text, setText] = useState(dialog[index]);
const [displayText, setDisplayText] = useState('');

const writeMessage = () => {
  if (index + 1 < dialog.length) {
    setIndex(index + 1);
    setText(dialog[index + 1]);
    setDisplayText('');
  }
};

useEffect(() => {
  let i = 0;
  const typing = setInterval(() => {
    if (i === text.length) {
      clearInterval(typing);
    } else {
      setDisplayText(text.substring(0, i + 1));
      i++;
    }
  }, 40);
  return () => clearInterval(typing);
}, [text]);

    const handleClick = () => {
    writeMessage();
  };



  return (
     <section className="h-screen farm-font">
       <div className='grid place-content-center backgroundImage  '>
      <div className={`relative mt-64 animate__animated animate__fadeInUp animate__slow `}>
        <img src={DialogBox} alt="dialogBox" className='w-full max-w-3xl relative ' />
              <p className=' absolute max-w-[12.25rem] top-2 left-4 bottom-0 text-sm text-[#531A12] md:text-3xl md:left-6 md:top-4 md:max-w-[26rem]'>{displayText }</p>
        <img src={Ruma} className='absolute top-6 right-16 w-7 md:w-12 md:top-12 md:right-[8.3rem]' alt="Ruma" />
        <p className='absolute right-[4.75rem] bottom-[2.225rem] text-sm text-[#531A12] font-semibold md:text-3xl md:right-32 md:bottom-6'>Ruma</p>
      {index + 1 <  dialog.length && <button className='absolute' onClick={handleClick}>next</button>}
        
      </div>
       </div>
    </section>
  )
}

export default Farm