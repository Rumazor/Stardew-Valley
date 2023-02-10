import React, { useEffect } from 'react'
import DialogBox from '../../assets/dialogBox.svg'
import DialogBoxNoChar from '../../assets/dialogBoxNoChar.svg'
import dialogButton from '../../assets/dialogButton.svg'
import Ruma from '../../assets/Ruma.svg'
import Bear from '../../assets/Bear.svg'
import './granja.css'
import { useState } from 'react'
import SmallSelect from '../../music/smallSelect.wav'
import { playSound } from '../../helpers/playSound'

const Farm = () => {
  const [index, setIndex] = useState(0);
  const [dialog] = useState(['Hola amor, se que todo esto es muy raro pero no te preocupes, dame un momento y te explicare de que va esto.', 'Veras hemos hecho un monton de cosas aqui en stardew valley asi que...', '¿Por que no mejor damos un  recorrido de como empezo todo?.', '¿Recuerdas? empezamos sin nada, solo habia piedra, monte y hierva :v', 'Pasamos horas y horas quitando todo eso para abrir paso a lo que seria nuestra granja.', 'Ir a la ciudad para hacer algunas misiones, obtener monedas y comprar semillas.', 'Era un trabajo riguroso regar nuestras cosechas al principio  pero con trabajo duro fue resultando como esperabamos.', 'Adentrarnos a la cueva fue facil al comienzo pero poco a poco descender era mas retador.', 'Era divertido y a la vez adictivo querer seguir bajando cada vez mas y mas, incluso nos desmayamos varias veces por no llegar a tiempo a nuestra casa.', 'Me gustaba mucho pescar ¡incluso atrape uno legendario!, y tu siempre me recordabas revisar las trampas.', 'Tampoco olvidemos tu peculiar encuentro con el oso, estoy seguro que el se acuerda de ti.', '¡Por supuesto! Me tragiste mi salsa favorita, eres demasiado genial como para olvidarte.','El primer invierno nos tomo de sorpresa, pero no el segundo, ya estabamos preparados con reservas de heno.','Creo que mi mapa favorito es este jeje.','Otoño fue la ultima estación que jugamos.','Todavia hay mas cosas que explorar, mas cosas por ver, mas cosas que descubrir y mas cosas que desbloquear.','Como sabes, no soy bueno dando regalos y ME CUESTA MUCHO matener una sorpresa.', 'Pero reserve esto para ti.','¡Te quiero mucho amor!']);
  const [text, setText] = useState(dialog[index]);
  const [displayText, setDisplayText] = useState('');



  const [scene] = useState('farmSceneUndone')
  const [showScene, setShowScene] = useState('')
  const [dialogBoxEmpty,setDialogBoxEmpty] = useState(false)
  const [showButton, setShowButton] = useState(false);

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
      setShowButton(true);
    } else {
      setDisplayText(text.substring(0, i + 1));
      i++;
    }
  }, 40);
  return () => clearInterval(typing) ;
}, [text]);


  const handleClick = () => {
    playSound(SmallSelect)
     setShowButton(false);
    writeMessage();
    if (index === 2) {
      setShowScene(scene)
    }
  };

  

  useEffect(() => {
    switch (index) {
      case 5:
        setShowScene('townScene')
        break;
      case 7:
        setShowScene('mineScene')
        break;
      case 9:
        setShowScene('fishScene')
        break;
      case 10:
        setShowScene('bearScene')
        break;
      case 12:
        setShowScene('winterScene')
        break;
      case 14:
        setShowScene('farmScene')
        break;
      case 15:
        setShowScene('')
        break;
      case 18:
        setShowScene('marriageScene')
        setTimeout(()=>{
          setDialogBoxEmpty(true)
        },6000)
        break;

      default:
        break;
    }

  }, [index])


  console.log(index);

  return (
    <section className="h-screen overflow-hidden bg-black farm-font">
      <div className={`grid place-content-center h-screen  ${showScene} ${showScene === scene && 'animate__animated animate__fadeIn animate__slower '}`}>

       <div className={`relative mt-64 animate__animated animate__fadeInUp animate__slow `}>
        {dialogBoxEmpty && <> <img src={DialogBoxNoChar} alt="dialogBox" className=' w-[26rem] relative' />
        
        <p className=' absolute max-w-[12.25rem] top-2 left-4 bottom-0 text-sm text-[#531A12] md:text-4xl md:left-10 md:top-4 md:max-w-[26rem]'>{displayText}</p>
        </> 
        }
         <div>
        {index === 18 ||  
        <> <img src={DialogBox} alt="dialogBox" className='w-full max-w-3xl relative ' />
          <p className=' absolute max-w-[12.25rem] top-2 left-4 bottom-0 text-sm text-[#531A12] md:text-3xl md:left-6 md:top-4 md:max-w-[26rem]'>{displayText}</p>
          
          {index === 11 ? <img src={Bear} className='absolute top-6 right-16 w-28 md:w-[160px] md:top-10 md:right-[5rem]' alt="Oso" /> : <img src={Ruma} className='absolute top-6 right-16 w-7 md:w-12 md:top-12 md:right-[8.3rem]' alt="Ruma" /> }
          <p className='absolute right-[4.75rem] bottom-[2.225rem] text-sm text-[#531A12] font-semibold md:text-3xl md:right-32 md:bottom-6'>{index ===  11 ? 'Oso' : 'Ruma'}</p>
          {index + 1 < dialog.length && showButton && <button className='absolute cursorLoad w-8 h-4 top-[76%]  animate-pulse bottom-0 right-[42%]' onClick={handleClick}><img src={dialogButton} className='absolute' alt="" /></button>
           }
           </>
}
          
        
        </div>
      </div>
      </div>
        </section>
  )
}

export default Farm