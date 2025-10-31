const myLibrary = [];

// Class um Instanzen von Büchern zu erstellen mit der Methode, den Gelesenen-Status zu ändern
class Book {
    constructor(title, author, pages, read) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleReadStatus() {
        this.read = !this.read;
    }
}

// // Object Constructor um Bücher zu erstellen
// function Book(title, author, pages, read) {
//     if (!new.target) {
//         throw Error('Must use the new operator to call the function!');
//     }
//     this.id = crypto.randomUUID();
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

// Book.prototype.toggleReadStatus = function () {
//     this.read = !this.read;
// }

// Funktion zum Hinzufügen eines neuen Buchs in das Array "myLibrary"
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// Erstelle drei Bücher, um das Design anpassen zu können => CSS optimieren
addBookToLibrary('Jobs', 'Steve Jobs', 542, true);
addBookToLibrary('Gates', 'Bill Gates', 462, false);
addBookToLibrary('Musk', 'Elon Musk', 486, true);

console.log(myLibrary)

// Funktion, um die neu erstellten Bücher in die DOM hinzuzufügen
// bzw. zu rendern
function displayBooks() {
    const containerBooks = document.querySelector('output');
    containerBooks.textContent = '';

    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-button');

        for(const [key, value] of Object.entries(book)) {
            if (key === 'id') {
                deleteBtn.dataset.id = value;
                continue;
            }
            if (key === 'read') {
                console.log(book.read)
                const bookProperty = document.createElement('p');
                bookProperty.innerHTML = `${key}: ${value} <button class="toggle-state-button"><i class="fas fa-sync"></i></button>`;
                const toggleStateBtn = bookProperty.querySelector('.toggle-state-button');

                if(book.read === true) {
                    bookProperty.classList.remove('not-read');
                    bookProperty.classList.add('read');
                }
                else {
                    bookProperty.classList.remove('read');
                    bookProperty.classList.add('not-read');
                }

                toggleStateBtn.addEventListener('click', () => {
                    book.toggleReadStatus();
                    displayBooks();
                })
                bookDiv.appendChild(bookProperty);
                continue
            }
            const bookProperty = document.createElement('p');
            bookProperty.textContent = `${key}: ${value}`;
            bookDiv.appendChild(bookProperty);
        }

        deleteBtn.textContent = 'Löschen';
        deleteBtn.addEventListener('click', (e) => {
            const bookId = e.target.dataset.id;
            const bookIndex = myLibrary.findIndex(b => b.id === bookId);
            myLibrary.splice(bookIndex, 1);
            console.log(myLibrary);
            displayBooks();
        })
        bookDiv.appendChild(deleteBtn);

        containerBooks.appendChild(bookDiv);
    });
}

displayBooks();

// Funktionalität zur Hinzufügen neuer Bücher durch die UI
const addNewBook = document.querySelector('#add-new-book');
const dialog = document.querySelector('#new-book-dialog');
const addBtn = document.querySelector('#add-button');
const closeBtn = document.querySelector('#close-dialog');
const deleteBtns = document.querySelectorAll('.delete-button');

addNewBook.addEventListener('click', () => {
    dialog.showModal();
})

addBtn.addEventListener('click', (e) => {
    e.preventDefault;
    const newTitle = document.querySelector('#title').value;
    const newAuthor = document.querySelector('#author').value;
    const newPages = document.querySelector('#pages').value;
    const newRead = document.querySelector('#read').checked;

    addBookToLibrary(newTitle, newAuthor, newPages, newRead);
    displayBooks();
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
})