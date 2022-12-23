const input = document.querySelector("input");
const list = document.querySelector("ul");

const insertItem = () => {
  
  if (input.value === "") {
    return;
  }

  const item = document.createElement("li");
  const timerAndControlOfTheItem = document.createElement("div");
  const deleteItemButton = document.createElement("button")
  const markItemAsDone = document.createElement("button")
  const timer = document.createElement("p");

  deleteItemButton.classList.add("deleteItemButton")
  markItemAsDone.classList.add("markButton")

  timer.innerText = new Date().toLocaleTimeString("pt-br", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
  })

  deleteItemButton.innerHTML = `<i class="delete fa-solid fa-x"></i>`;
  markItemAsDone.innerHTML = `<i class="mark fa-solid fa-check"></i>`;

  item.innerText = input.value

  timerAndControlOfTheItem.append(markItemAsDone);
  timerAndControlOfTheItem.append(deleteItemButton);
  timerAndControlOfTheItem.append(timer);

  item.append(timerAndControlOfTheItem);

  list.prepend(item)

  input.value = "";
}

// inserir item na lista
document.querySelector("#insert").addEventListener("click", insertItem);
document.querySelector("body").addEventListener("keydown", e => {
  if (e.key == "Enter") {
    insertItem()
  }
})

// apagar a lista por completo
document.querySelector("#eraseList").addEventListener("click", () => {
  if (list.innerText !== "") {
    if (confirm("Deseja deletar a lista por completo?")) {
      list.innerHTML = ``;
    }
  }
});

// marcar atividade como feita ou deletar atividade
list.addEventListener("click", e => {if (e.target.classList.contains("mark")) {
    e.target.parentElement.parentElement.parentElement.classList.toggle("activityDone");
    e.target.classList.toggle("buttonActivityDone");
  } 
  else if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.parentElement.remove()
}})
