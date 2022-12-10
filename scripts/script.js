const main = document.querySelector("main");
const input = document.querySelector("input");
const buttonAddElementInList = document.querySelector("button");
const deleteListButton = document.querySelector("#deleteList");
const ul = document.createElement("ul");

ul.classList.add("list");
main.append(ul);

buttonAddElementInList.addEventListener("click", () => {
  if (input.value === "") {
    return;
  }

  const li = document.createElement("li");
  li.innerText = input.value;
  li.classList.add("listElement");

  const div = document.createElement("div");

  const deleteListElementButton = document.createElement("button");
  deleteListElementButton.innerText = "X";
  deleteListElementButton.classList.add("deleteButton");

  const markAsDone = document.createElement("button");
  markAsDone.innerText = "V";
  markAsDone.classList.add("doneButton");

  div.append(markAsDone);
  div.append(deleteListElementButton);
  li.append(div);
  ul.prepend(li);

  input.value = "";

  deleteListElementButton.addEventListener("click", () => {
    if (confirm("Deseja mesmo deletar este elemento?")) {
      deleteListElementButton.parentElement.parentElement.remove();
    }
  });

  markAsDone.addEventListener("click", () => {
    markAsDone.parentElement.parentElement.classList.toggle("markedAsDone");
    markAsDone.classList.toggle("buttonDone");
  });
});

deleteListButton.addEventListener("click", () => {
  if (confirm("Deseja deletar a lista por completo?")) {
    ul.innerHTML = ``;
  }
});
