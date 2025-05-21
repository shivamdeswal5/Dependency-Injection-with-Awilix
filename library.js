const Books = require('./books');

class Library {
    constructor({ displayBooks }) {
        this.books = [];
        this.displayBooks = displayBooks;
    }

    addBook(title, author, bookNo) {
        const book = new Books(title, author, bookNo);
        this.books.push(book);
    }

    getBookDetails() {
        console.log("\nAll Books:");
        this.books.forEach(book => book.getDetails());
    }

    borrowBook(bookNo) {
        const book = this.books.find(b => b.bookNo === bookNo);
        if (book) {
            book.borrowBook();
        } else {
            console.log(`Book with number ${bookNo} not found.`);
        }
    }

    returnBook(bookNo) {
        const book = this.books.find(b => b.bookNo === bookNo);
        if (book) {
            book.returnBook();
        } else {
            console.log(`Book with number ${bookNo} not found.`);
        }
    }

    showAvailableBooks() {
        this.displayBooks.displayAvailableBooks(this.books);
    }

    showBorrowedBooks() {
        this.displayBooks.displayBorrowedBooks(this.books);
    }
}

module.exports = Library;
