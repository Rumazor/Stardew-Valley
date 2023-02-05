export const playSound = (music) => {
  const audioElement = new Audio(music);
  audioElement.volume = 0.5;
  audioElement.preload = true;
  audioElement.play();
};
