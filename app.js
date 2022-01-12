//----------------------------------SELECTORS----------------------------------------
const newBook_button = document.getElementById('modal-new-book');
const bookShelf = document.querySelector('.book-shelf');
const submit_button = document.getElementById('submit');
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");
let removeBook = document.querySelectorAll('.remove');

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
    document.getElementById('book-title').value = null;
    document.getElementById('book-author').value = null;
    document.getElementById('book-pages').value = null;
    document.getElementById('book-read').value = null;

    modal.style.display = 'block';
})

submit_button.addEventListener('click', () => {
    modal.style.display = 'none';
    addBookToLibrary();
})

function createCards(){

    // Remove all cards first
    while(bookShelf.firstChild){
        bookShelf.removeChild(bookShelf.firstChild);
    }

    for( let i = 0; i < myLibrary.length; i++) {
            let bookCard = document.createElement('div');
            bookCard.classList.add('card');
            bookCard.setAttribute('data-location', `book-${i}`)
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
            switch(myLibrary[i].read){
                case 'Yes':
                    read_button.textContent = 'Read';
                    read_button.style.backgroundColor = 'green';
                    break;
                case "No":
                    read_button.textContent = 'Not Read';
                    read_button.style.backgroundColor = 'red';
            }
            read_button.addEventListener('click', () => {
                if (myLibrary[i].read === "Yes"){
                    myLibrary[i].read = "No";
                    createCards();
                }else if (myLibrary[i].read === "No"){
                    myLibrary[i].read = "Yes";
                    createCards();
                }
            });
            bookCard.appendChild(read_button);
    
            let remove_button = document.createElement('button');
            remove_button.textContent = 'Remove';
            remove_button.classList.add('remove');
            remove_button.addEventListener('click', () => {
                let filtered = myLibrary.splice(i,1);
                createCards();
            });
            bookCard.appendChild(remove_button);
    }
}

//----------------------------------- MODAL ---------------------------------------------

closeBtn.addEventListener('click', () =>{
  modal.style.display = "none";
});

//Hides the modal if user clicked outside the modal
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}