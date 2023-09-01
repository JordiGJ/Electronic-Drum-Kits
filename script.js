// get elements
const sounds = document.querySelectorAll("audio");
const buttons = document.querySelectorAll("button");

// variables
const options = {
  crash: "Crash",
  kick: "Kick",
  snare: "Snare",
  tom: "Tom",
};

// functions
function handleClick(e) {
  const target = e.target.textContent;
  if (target === options.crash) {
    const soundToPlay = target.toLowerCase() + "Sound";
    playSound(soundToPlay);
  }
  if (target === options.kick) {
    const soundToPlay = target.toLowerCase() + "Sound";
    playSound(soundToPlay);
  }
  if (target === options.snare) {
    const soundToPlay = target.toLowerCase() + "Sound";
    playSound(soundToPlay);
  }
  if (target === options.tom) {
    const soundToPlay = target.toLowerCase() + "Sound";
    playSound(soundToPlay);
  }
}

function playSound(sound) {
  const toPlay = document.querySelector(`#${sound}`);
  toPlay.currentTime = 0;
  toPlay.play();
}

// eventListeners
buttons.forEach((button) => button.addEventListener("click", handleClick));
