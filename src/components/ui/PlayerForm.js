import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPlayerForm } from "../../features/playerReducer/playerSlice";
import "./playerForm.css";

const PlayerForm = () => {
  const [playerInfo, setPlayerInfo] = useState({
    name: "",
    gender: "",
    favoriteThing: "",
    animalPreference: "",
  });
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (event) => {
    setPlayerInfo({
      ...playerInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerInfo.name.length < 2 || playerInfo.name.length > 8) {
      alert("Name must be between 2 and 8 characters long.");
    } else {
      dispatch(setPlayerForm(playerInfo));
    }
  };

  return (
    <form
      className=" farm-font mt-4 p-2 text-lg text-[#221122] flex flex-col items-center justify-center "
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="mx-2">
          Nombre:
        </label>
        <input
          type="text"
          id="name"
          className="bg-transparent inputImage px-2 outline-none max-w-[8rem] overflow-hidden whitespace-nowrap"
          name="name"
          value={playerInfo.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="favoriteThing" className="mx-2">
          Tu cosa favorita:
        </label>
        <input
          type="text"
          id="favoriteThing"
          name="favoriteThing"
          value={playerInfo.favoriteThing}
          onChange={handleChange}
          className="bg-transparent inputImage px-2 outline-none "
        />
      </div>
      <div>
        <label htmlFor="animalPreference" className="mx-2">
          Animal Preference:
        </label>
        <input
          type="text"
          id="animalPreference"
          name="animalPreference"
          value={playerInfo.animalPreference}
          onChange={handleChange}
          className="bg-transparent inputImage px-2 outline-none "
        />
      </div>

      <div>
        <label htmlFor="gender" className="mx-2">
          Genero:
        </label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={playerInfo.gender}
          onChange={handleChange}
          className="bg-transparent inputImage px-2 outline-none "
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PlayerForm;
