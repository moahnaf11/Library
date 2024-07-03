"use strict";

let buttonClose = document.querySelector(".close");
let formContainer = document.querySelector(".form-container");
let buttonAddBook = document.querySelector(".book-button");

buttonClose.addEventListener("click", (e) => {
  formContainer.style.display = "none";
})

buttonAddBook.addEventListener("click", (e) => {
  formContainer.style.display = "flex";
})



let myLibrary = [];

function Book(author, title, pages, read) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;

}

let count = 0;

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formContainer.style.display = "none";
  const author = document.querySelector("#author").value;
  const title = document.querySelector("#title").value;
  const pages = document.querySelector("#pages").value;
  const yes = document.querySelector("#yes");
  const no = document.querySelector("#no");
  let read;

  if (no.checked) {
    read = "Not Finished";
  } else if (yes.checked) {
    read = "Finished";
  }

  let book = {
    writer: author,
    bookName: title,
    totalPages: pages,
    finished: read
  }

  myLibrary.push(book);

  let cardContainer = document.querySelector(".card-container");
  let card = document.createElement("div");
  card.classList.add(`number-${count}`);
  card.setAttribute("role", "bookCards");
  ++count;

  card.style.height = "200px";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.gap = "15px";
  card.style.backgroundColor = "#a5b4fc";
  card.style.justifyContent = "center";
  card.style.alignItems = "center";
  card.style.borderRadius = "10px";
  card.style.boxShadow = "1px 1px 4px 3px #94a3b8";
  card.style.boxSizing = "border-box";
  card.style.padding = "10px";
  card.style.justifyContent = "flex-start";
  card.style.fontFamily = "source_sans_proextralight";
  card.style.fontSize = "15px";
  card.style.fontWeight = "600";

  cardContainer.appendChild(card);
  let buttonContainer = document.createElement("div");
  let authorContainer = document.createElement("div");
  let titleContainer = document.createElement("div");
  let pageContainer = document.createElement("div");
  let bookReadContainer = document.createElement("div");

  authorContainer.style.display = "flex";
  authorContainer.style.justifyContent = "center";
  authorContainer.style.gap = "20px";
  titleContainer.style.display = "flex";
  titleContainer.style.justifyContent = "center";
  titleContainer.style.gap = "20px";
  pageContainer.style.display = "flex";
  pageContainer.style.justifyContent = "center";
  pageContainer.style.gap = "20px";
  bookReadContainer.style.display = "flex";
  bookReadContainer.style.justifyContent = "center";
  bookReadContainer.style.gap = "20px";

  card.appendChild(authorContainer);
  card.appendChild(titleContainer);
  card.appendChild(pageContainer);
  card.appendChild(bookReadContainer);
  card.appendChild(buttonContainer);

  buttonContainer.style.display = "flex";
  buttonContainer.style.fontFamily = "intro_rust_gbase_2_line, sans-serif";
  buttonContainer.style.boxSizing = "border-box";
  buttonContainer.style.padding = "5px 10px";
  buttonContainer.style.display = "flex";
  buttonContainer.style.justifyContent = "space-between";
  buttonContainer.style.width = "100%";
  



  let buttonRead = document.createElement("button");
  buttonRead.classList.add("finished");
  buttonContainer.appendChild(buttonRead);
  buttonRead.style.color = "white";
  buttonRead.style.backgroundColor = "green";
  buttonRead.textContent = "Finished";
  

  let buttonRemove = document.createElement("button");
  buttonRemove.classList.add("remove");
  buttonContainer.appendChild(buttonRemove);

  buttonRemove.style.backgroundColor = "red";
  buttonRemove.textContent = "x";
  buttonRemove.style.color = "white";

  let authorNameContainer = document.createElement("div");
  authorContainer.appendChild(authorNameContainer);
  authorNameContainer.textContent = "Author:";
  authorNameContainer.style.width = "35%";
  authorNameContainer.style.textAlign = "center";
  authorContainer.style.width = "100%";

  let authorName = document.createElement("div");
  authorName.textContent = book.writer;
  authorContainer.appendChild(authorName);
  authorName.style.flexGrow = "1";

  let bookTitleContainer = document.createElement("div");
  titleContainer.appendChild(bookTitleContainer);
  bookTitleContainer.textContent = "Title:";
  titleContainer.style.width = "100%";
  bookTitleContainer.style.width = "35%";
  bookTitleContainer.style.textAlign = "center";

  let bookTitle = document.createElement("div");
  bookTitle.textContent = book.bookName;
  titleContainer.appendChild(bookTitle);
  bookTitle.style.flexGrow = "1";

  let pageNumberContainer = document.createElement("div");
  pageContainer.appendChild(pageNumberContainer);
  pageNumberContainer.textContent = "Pages:";
  pageNumberContainer.style.width = "35%";
  pageNumberContainer.style.textAlign = "center";
  pageContainer.style.width = "100%";

  let pageNumbers = document.createElement("div");
  pageNumbers.textContent = book.totalPages;
  pageContainer.appendChild(pageNumbers);
  pageNumbers.style.flexGrow = "1";

  let bookReadCont = document.createElement("div");
  bookReadContainer.appendChild(bookReadCont);
  bookReadCont.textContent = "Read:";
  bookReadCont.style.width = "35%";
  bookReadCont.style.textAlign = "center";
  bookReadContainer.style.width = "100%";

  let bookRead = document.createElement("div");
  bookRead.classList.add("read-text");
  bookRead.textContent = book.finished;
  bookReadContainer.appendChild(bookRead);
  bookRead.style.flexGrow = "1";

  card.style.alignItems = "center";
  card.style.fontFamily = "intro_rust_gbase_2_line, sans-serif";


  card.addEventListener("click", (e) => {
    console.log("clicked");
    switch (e.target.className) {
    case "remove":
      myLibrary.splice(Number(card.className.split("-")[1]), 1);
      myLibrary.splice(Number(card.className.split("-")[1]), 0, "");
      card.remove();
      break;
        
    case "finished":
      if (read == "Not Finished") {
        read = "Finished";
        buttonRead.textContent = "re-read";
      } else {
        read = "Not Finished";
        buttonRead.textContent = "finished";
      }
      myLibrary[Number(card.className.split("-")[1])].finished = read;
      let selectCard = document.querySelector(`.${card.className}`);
      let readDiv = selectCard.querySelector(".read-text");
      readDiv.textContent = myLibrary[Number(card.className.split("-")[1])].finished;
      break;
    }
  })
})









