import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPlayerName } from "../../features/playerReducer/playerSlice";

const PlayerForm = () => {
  const [playerInfo, setPlayerInfo] = useState({
    name: "",
    gender: "",
    favoriteThing: "",
    animalPreference: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setPlayerInfo({
      ...playerInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setPlayerName(playerInfo));
  };

  return (
    <form className=" farm-font w-[90%] " onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        className="bg-transparent"
        name="name"
        value={playerInfo.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="gender">Genero:</label>
      <input
        type="text"
        id="gender"
        name="gender"
        value={playerInfo.gender}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="favoriteThing">Favorite Thing:</label>
      <input
        type="text"
        id="favoriteThing"
        name="favoriteThing"
        value={playerInfo.favoriteThing}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="animalPreference">Animal Preference:</label>
      <input
        type="text"
        id="animalPreference"
        name="animalPreference"
        value={playerInfo.animalPreference}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PlayerForm;
