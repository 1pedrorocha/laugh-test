const laughBt = document.querySelector(".hehehe");
const result = document.querySelector(".hahaha");

const laughAudio2 = document.getElementById("audio");
laughAudio2.loop = true;

function laugh(text) {
  result.innerHTML = `${text}`;
}

laughBt.addEventListener("click", () => {
  if (result.innerHTML == "") {
    laughBt.innerHTML = "Parar";
    laughAudio2.play();
  } else {
    laugh("");
    laughBt.innerHTML = "Lamentar";
    laughAudio2.pause();
  }
  startOrStop();
});

let timer = 5;

const counting = () => {
  timer -= 1;
  console.log(timer);

  if (timer === 5 || timer === 2) {
    laugh("HAHAHAHA");
  } else if (timer === 4 || timer === 1) {
    laugh("HEHEHEHE");
  } else if (timer === 3 || timer === 0) {
    laugh("HOHOHOHO");
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

// LOCAL STORAGE

const formLamento = document.querySelector(".random-form");
const localStorageItems = localStorage.getItem("lamentos");
let lamentos = localStorageItems ? JSON.parse(localStorageItems) : [];

const lamentosContainer = document.querySelector(".lamentos-list");

const updateLocalStorage = () => {
  localStorage.setItem("lamentos", JSON.stringify(lamentos));
};

const button1 = document.querySelector("#form-button");

function criaLamento(novoLamento) {
  console.log("funçao ativada");
  const li = document.createElement("li");

  const paragraph = document.createElement("p");

  paragraph.textContent = novoLamento;

  console.log(paragraph.textContent);

  //   lamentosContainer.appendChild(li);

  li.appendChild(paragraph);

  return li;
}

lamentos.forEach((lamento) => {
  const itemLamento = criaLamento(lamento);
  lamentosContainer.appendChild(itemLamento);
});

formLamento.addEventListener("submit", (event1) => {
  event1.preventDefault();

  const lamento = document.querySelector(".form-textarea").value;

  lamentos.push(lamento);
  console.log(lamentos);

  updateLocalStorage();

  criaLamento(lamento);

  const itemLamento = criaLamento(lamento);
  lamentosContainer.appendChild(itemLamento);

  document.querySelector(".form-textarea").value = "";
});

const zerador = document.querySelector(".zerar-button");

zerador.addEventListener("click", () => {
  localStorage.clear();
  console.log("foi?");
  lamentosContainer.innerHTML = "";
});

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
