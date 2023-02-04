import music from "../../src/music/Fall.ogg";

export const playSound = () => {
  const audioElement = new Audio(music);
  audioElement.volume = 0.5;
  audioElement.play();
};
