const laughBt = document.querySelector(".hehehe");
const result = document.querySelector(".hahaha");

const laughAudio = new Audio("/Man Laugh And Knee Slap.mp3");
laughAudio.loop = true;

function laugh(text) {
  result.innerHTML = `${text}`;
}

laughBt.addEventListener("click", () => {
  if (result.innerHTML == "") {
    laughBt.innerHTML = "Stop";
    laughAudio.play();
  } else {
    laugh("");
    laughBt.innerHTML = "Laugh";
    laughAudio.pause();
  }
  startOrStop();
});

let timer = 5;

const counting = () => {
  timer -= 1;
  console.log(timer);

  if (timer === 5 || timer === 3 || timer === 1) {
    laugh("HAHAHAHA");
  } else if (timer === 4 || timer === 2 || timer === 0) {
    laugh("HEHEHEHE");
  }

  if (timer === 0) {
    timer = 5;
  }
};

let timerInterval = null;

function startOrStop() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    return;
  }

  timerInterval = setInterval(counting, 1000);
}

// function startOrPause() {
//   if (timerInterval) {
//     stopCounting();
//   }
//   timerInterval = setInterval(timer, 1000);
//   console.log(timer);
// }

// function stopCounting() {
//   clearInterval(timerInterval);
//   timerInterval = null;
// }
