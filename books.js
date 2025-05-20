const {container,setup} = require('./awilix-setup');
const books = container.resolve('books');

class Books {
    constructor(title,author,bookNo) {
        this.title = title;
        this.author = author;
        this.bookNo = bookNo;
        this.isAvailable = true;
    }

    getDetails(){
        console.log(`Book Details...\nTitle:${this.title}\nAuthor:${this.author}\nBookNo:${this.bookNo}\n`)
    }

    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return true;
        }
        return false;
    }

    returnBook() {
        this.isAvailable = true;
    }
}

let book1 = new Books('Nestjs','Kamil Myśliwiec', 101);
book1.getDetails();

module.exports = Books;
