const main = document.querySelector("main");
const input = document.querySelector("input");
const buttonAddElementInList = document.querySelector("button");
const deleteElementButton = document.querySelector("#deleteList");
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

  const deleteListElementButton = document.createElement("button");
  deleteListElementButton.innerText = "X";
  deleteListElementButton.classList.add("delete");

  li.append(deleteListElementButton);
  ul.prepend(li);

  deleteListElementButton.addEventListener("click", () => {
    if (confirm("Deseja mesmo deletar este elemento?")) {
      deleteListElementButton.parentElement.remove();
    }
  });
});

deleteElementButton.addEventListener("click", () => {
  if (confirm("Deseja deletar a lista por completo?")) {
    ul.innerHTML = ``;
  }
});
