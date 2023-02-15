import React from "react";
import PlayerForm from "../ui/PlayerForm";
import createCharacterBg from "../../assets/createCharacter/createCharacterBg.png";
import "./standarRoute.css";

const standardRoute = () => {
  return (
    <div className="bg-black h-screen grid place-content-center">
      <div className="animate__animated animate__fadeIn animate__slower p-4">
        <div>
          <img src={createCharacterBg} className="relative h-[40rem]" alt="" />
          <div className="flex flex-col justify-center items-center top-12  w-[90%] absolute">
            <h1 className=" z-40  text-center farm-font font-semibold text-2xl text-[#853605]">
              Crea tu personaje
            </h1>
            <PlayerForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default standardRoute;
