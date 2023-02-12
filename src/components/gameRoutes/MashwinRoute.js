import React, { useEffect, memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import DialogBox from "../../assets/dialogBox.svg";
import DialogBoxNoChar from "../../assets/dialogBoxNoChar.svg";
import dialogButton from "../../assets/dialogButton.svg";
import Ruma from "../../assets/Ruma.svg";
import Bear from "../../assets/Bear.svg";
import SmallSelect from "../../music/smallSelect.wav";
import { playSound } from "../../helpers/playSound";
import ElliotSong from "../../music/ElliotTheme.ogg";
import "./mashwinRoute.css";

const MashwinRoute = memo(() => {
  const [index, setIndex] = useState(18);
  const [dialog] = useState([
    "Hola, sé que todo esto es muy raro, pero no te preocupes, dame un momento y te explicaré de que va esto.",
    "Verás hemos hecho un montón de cosas aquí en Stardew Valley así que...",

    "¿Por qué no mejor damos un recorrido de como empezó todo?.",

    "¿Recuerdas? Empezamos sin nada, solo había piedra, monte y hierva.",

    "Pasamos horas y horas quitando todo eso para abrir paso a lo que sería nuestra granja.",

    "Ir a la ciudad para hacer algunas misiones, obtener monedas y comprar semillas.",

    "Era un trabajo riguroso regar nuestras cosechas al principio pero con trabajo duro fue resultando como esperábamos.",

    "Adentrarnos a la cueva fue fácil al comienzo pero poco a poco descender era más retador.",

    "Era divertido y a la vez adictivo querer seguir bajando cada vez más y más, incluso nos desmayamos varias veces por no llegar a tiempo a nuestra casa.",

    "Me gustaba mucho pescar ¡incluso atrapé uno legendario!, y tú siempre me recordabas revisar las trampas.",

    "Tampoco olvidemos tu peculiar encuentro con el oso, estoy seguro de que él se acuerda de ti.",

    "¡Por supuesto! Me trajiste mi salsa favorita, eres demasiado genial como para olvidarte.",

    "El primer invierno nos tomó de sorpresa, pero no el segundo, ya estábamos preparados con reservas de heno.",

    "Creo que esta es mi estación favorita je, je, je.",

    "Otoño fue la última estación que jugamos y estoy seguro de que nuestros animales esperan con ansias nuestro regreso.",

    "Todavía hay más cosas que explorar, más cosas por ver, más cosas que descubrir y más cosas que desbloquear.",

    "Como sabes, no soy bueno dando regalos y ME CUESTA MUCHO mantener una sorpresa.",

    "Pero hice esto para ti.",

    "¡Te quiero muchísimo amor! Gracias por jugar.",
  ]);
  const [text, setText] = useState(dialog[index]);
  const [displayText, setDisplayText] = useState("");
  const navigate = useNavigate();

  const [scene] = useState("farmSceneUndone");
  const [showScene, setShowScene] = useState("");
  const [dialogBoxEmpty, setDialogBoxEmpty] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [goBackButton, setGoBackMenu] = useState(false);

  const writeMessage = () => {
    if (index + 1 < dialog.length) {
      setIndex(index + 1);
      setText(dialog[index + 1]);
      setDisplayText("");
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
    return () => clearInterval(typing);
  }, [text]);

  const handleClick = () => {
    playSound(SmallSelect);
    setShowButton(false);
    writeMessage();
    if (index === 2) {
      setShowScene(scene);
    }
  };

  useEffect(() => {
    switch (index) {
      case 5:
        setShowScene("townScene");
        break;
      case 7:
        setShowScene("mineScene");
        break;
      case 9:
        setShowScene("fishScene");
        break;
      case 10:
        setShowScene("bearScene");
        break;
      case 12:
        setShowScene("winterScene");
        break;
      case 14:
        setShowScene("farmScene");
        break;
      case 15:
        setShowScene("");
        break;
      case 18:
        setShowScene("marriageScene");
        playSound(ElliotSong);
        setTimeout(() => {
          setDialogBoxEmpty(true);
        }, 20000);

        setTimeout(() => {
          setGoBackMenu(true);
        }, 26000);
        break;

      default:
        break;
    }
  }, [index]);

  console.log(index);

  return (
    <section className="h-screen overflow-hidden bg-black farm-font">
      <div
        className={`grid place-content-center h-screen ${showScene} ${
          showScene === scene &&
          "animate__animated animate__fadeIn animate__slower "
        }`}
      >
        <div
          className={`relative mt-64 animate__animated animate__fadeInUp animate__slow `}
        >
          {dialogBoxEmpty && (
            <>
              {" "}
              <img
                src={DialogBoxNoChar}
                alt="dialogBox"
                className=" w-[26rem] relative"
              />
              <p className=" absolute max-w-[12.25rem] top-2  bottom-0 text-sm text-[#531A12] md:text-4xl md:left-6 md:top-4 md:max-w-[26rem]">
                {displayText}
              </p>
              {goBackButton && (
                <button
                  onClick={() => {
                    playSound(SmallSelect);
                    navigate("/");
                  }}
                  className="absolute left-0 right-0 bottom-4 text-3xl text-[#531A12] hover:border-2 border-red-700 w-fit
            px-10 mx-auto  cursorLoad"
                >
                  Ir al menu
                </button>
              )}
            </>
          )}
          <div>
            {index === 18 || (
              <>
                {" "}
                <img
                  src={DialogBox}
                  alt="dialogBox"
                  className="w-full max-w-3xl relative "
                />
                <p className=" absolute max-w-[12.25rem] top-2 left-4 bottom-0 text-sm text-[#531A12] md:text-3xl md:left-6 md:top-4 md:max-w-[26rem]">
                  {displayText}
                </p>
                {index === 11 ? (
                  <img
                    src={Bear}
                    className="absolute top-6 right-16 w-28 md:w-[160px] md:top-10 md:right-[5rem]"
                    alt="Oso"
                  />
                ) : (
                  <img
                    src={Ruma}
                    className="absolute top-6 right-16 w-7 md:w-12 md:top-12 md:right-[8.3rem]"
                    alt="Ruma"
                  />
                )}
                <p className="absolute right-[4.75rem] bottom-[2.225rem] text-sm text-[#531A12] font-semibold md:text-3xl md:right-32 md:bottom-6">
                  {index === 11 ? "Oso" : "Ruma"}
                </p>
                {index + 1 < dialog.length && showButton && (
                  <button
                    className="absolute cursorLoad w-8 h-4 top-[76%]  animate-pulse bottom-0 right-[42%]"
                    onClick={handleClick}
                  >
                    <img
                      src={dialogButton}
                      className="absolute  hover:scale-110"
                      alt="dialog button box"
                    />
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

export default MashwinRoute;
