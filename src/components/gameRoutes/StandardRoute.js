import React from "react";
import PlayerForm from "../ui/PlayerForm";
import ModalCreateCharacter from "../../assets/createCharacter/ModalCreate Character.png";

const standardRoute = () => {
  return (
    <div className="bg-black h-screen grid place-content-center">
      <div className="animate__animated animate__fadeIn animate__slower p-4">
        <div>
          <h1 className="absolute top-12 left-[30%] z-40">Crea tu personaje</h1>
          <img
            src={ModalCreateCharacter}
            className="relative h-[40rem]"
            alt=""
          />
          <PlayerForm />
        </div>
      </div>
    </div>
  );
};

export default standardRoute;
