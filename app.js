//----------------------------------SELECTORS----------------------------------------
const newBook_button = document.getElementById('modal-new-book');
const bookShelf = document.querySelector('.book-shelf');

//----------------------------------INITIALIZATIONS----------------------------------
let myLibrary = [];

function Book(author,title,pages,read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

// author, title, number of pages, read
function addBookToLibrary() {
    // let title = prompt("What is the title of the book?");
    // let author = prompt("Who is the author?");
    // let pages = Number(prompt("How many pages is the book?"));
    // let read = prompt("Have you read the book?", "Yes or No");
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;
    let pages = document.getElementById('book-pages').value;
    let read = document.getElementById('book-read').value;

    let newBook = new Book(author,title,pages,read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    createCards();
}

newBook_button.addEventListener('click', () => {
    addBookToLibrary();
})

function createCards(){

    // Remove all cards first
    while(bookShelf.firstChild){
        bookShelf.removeChild(bookShelf.firstChild);
    }

    for( let i = 0; i < myLibrary.length; i++) {
       // for(let prop in myLibrary[i]){
            let bookCard = document.createElement('div');
            bookCard.classList.add('card');
            bookShelf.appendChild(bookCard);
    
            let title_p = document.createElement('p');
            title_p.textContent = `Title: ${myLibrary[i].title}`;
            bookCard.appendChild(title_p);
    
            let author_p = document.createElement('p');
            author_p.textContent = `Author: ${myLibrary[i].author}`;
            bookCard.appendChild(author_p);
    
            let pages_p = document.createElement('p');
            pages_p.textContent = `Pages: ${myLibrary[i].pages}`;
            bookCard.appendChild(pages_p);
    
            let read_button = document.createElement('button');
            read_button.textContent = 'Read';
            bookCard.appendChild(read_button);
    
            let remove_button = document.createElement('button');
            remove_button.textContent = 'Remove';
            bookCard.appendChild(remove_button);
       // }
    }
}

// MODAL

let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")

modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}