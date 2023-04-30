"use strict";

///////////////////////
/* 
ЗАДАЧА:
Создайте функционал для открытия модальных окон.


ПОДСКАЗКА:
1-Не забывайте про свойство classList с помощью которого можно манипулировать классами HTML элементов
2-При добавлении класса .hidden к любому элементу, он исчезнет, при удалении этого класса, он появится
3-Не забудьте про то, что закрыть модальное окно можно как с помощью кнопки-крестика, в верхнем правом углу модального окна, так и с помощью нажатия на любое место "Оверлей"
*/

const showModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overley = document.querySelector(".overlay");

function handleOpenModal() {
  for (let value of showModal) {
    value.addEventListener("click", () => {
      overley.classList.toggle("hidden");
      modal.classList.toggle("hidden");
    });
  }
}

function handleCloseModal() {
  closeModal.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    overley.classList.toggle("hidden");
  });
}

function handleCloseOverley() {
  overley.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    overley.classList.toggle("hidden");
  });
}

function handlecloseEscape() {
  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape" && !modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
      overley.classList.add("hidden");
    }
  });
}

handleCloseOverley();
handleOpenModal();
handleCloseModal();
handlecloseEscape();
