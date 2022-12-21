const body = document.querySelector("body");
const input = document.querySelector("input");
const buttonAddElementInList = document.querySelector("button");
const buttonEraseList = document.querySelector("#erase");
const ul = document.createElement("ul");

ul.classList.add("list");
body.append(ul);

// Funções de adicionar elemento na lista, marcar como feito e deletar o elemento específico.
buttonAddElementInList.addEventListener("click", () => {
  if (input.value === "") {
    return;
  }

  const li = document.createElement("li");

  li.innerText = input.value;

  li.classList.add("listElement");

  const controlsOfTheElementAndTheTimer = document.createElement("div");
  controlsOfTheElementAndTheTimer.classList.add("controlsOfTheElementAndTheTimer")

  const deleteElement = document.createElement("button");
  deleteElement.innerHTML = `<i class="fa-solid fa-x"></i>`;
  deleteElement.classList.add("deleteButton");

  const buttonThatMarkAnActivityAsDone = document.createElement("button");
  buttonThatMarkAnActivityAsDone.innerHTML = `<i class="fa-solid fa-check"></i>`;
  buttonThatMarkAnActivityAsDone.classList.add("doneButton");

  const timer = document.createElement("p");

  timer.innerText = new Date().toLocaleTimeString("pt-br", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })

 

  controlsOfTheElementAndTheTimer.append(buttonThatMarkAnActivityAsDone);
  controlsOfTheElementAndTheTimer.append(deleteElement);
  controlsOfTheElementAndTheTimer.append(timer)
  li.append(controlsOfTheElementAndTheTimer);
  ul.prepend(li);

  input.value = "";

  deleteElement.addEventListener("click", () => {
    if (confirm("Deseja mesmo deletar este elemento?")) {
      deleteElement.parentElement.parentElement.remove();
    }
  });

  buttonThatMarkAnActivityAsDone.addEventListener("click", () => {
    buttonThatMarkAnActivityAsDone.parentElement.parentElement.classList.toggle("activityDone");
    buttonThatMarkAnActivityAsDone.classList.toggle("buttonActivityDone");
  });
});

//Função de apagar a lista completamente.
buttonEraseList.addEventListener("click", () => {
  if (confirm("Deseja deletar a lista por completo?")) {
    ul.innerHTML = ``;
  }
});
