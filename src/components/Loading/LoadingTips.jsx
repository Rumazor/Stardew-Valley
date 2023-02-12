import React,{useState, useEffect} from 'react'
import LoadingTip from '../../assets/LoadingText.svg'
import Chicken from '../../assets/chicken.svg'
import KofiButton from '../../assets/kofi_button.svg'
import './../gameRoutes/mashwinRoute.css'



const tips = [  "La mayoría de las granjas de pollo tienen más de 200,000 aves en un solo lugar.",  "Las vacas pueden sentir emociones como la tristeza y la felicidad.",  "Los cerdos son animales inteligentes y sociales que pueden aprender rápidamente.",  "Las abejas son esenciales para la polinización y la producción de alimentos.",  "Las gallinas pueden distinguir hasta 100 caras diferentes de otros animales y personas.",  "Los caballos pueden comunicarse entre ellos y con otros animales con más de 30 sonidos diferentes.",  "Las ovejas son capaces de reconocer y recordar el rostro de otros ovejas y humanos por más de un año.",  "Los cabritos nacen sin inmunidad natural y deben obtenerla de su madre a través de la leche materna.",  "Las granjas de vacas lecheras pueden tener hasta 10,000 vacas en un solo lugar.",  "Las granjas de cerdo son a menudo altamente intensivas y los cerdos pueden vivir en espacios muy pequeños.", "¿Sabias que el caballo de Mashwim se llama Rocinante al igual que el caballo de Don quijote?", 'Si deseas apoyarme puedes hacerlo invitandome un cafe ;)']


const LoadingTips = () => {

      const [advice, setAdvice] = useState(tips[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setAdvice(tips[randomIndex]);
  }, []);


  return (
    <div className='flex justify-center animate__animated animate__fadeIn   '>
        <div className='relative'>
        <img src={LoadingTip} className='w-[35rem]  h-full mt-48' alt="text box" />
        <p className='absolute farm-font text-4xl text-justify bottom-14  p-6 text-[#531A12]'>{advice}</p>
        {advice === 'Si deseas apoyarme puedes hacerlo invitandome un cafe ;)' && <a href='https://ko-fi.com/rumazor' target='_blank'  rel="noreferrer" >
            <img src={KofiButton} className='absolute bottom-2 left-28 max-w-[20rem] w-full hover:brightness-110' alt="kofi button" /></a>}
        <img src={Chicken} className='absolute w-12 -bottom-16 right-64 animate__animated animate__bounce  ' alt="text box" />
        </div>
    </div>
  )
}

export default LoadingTips