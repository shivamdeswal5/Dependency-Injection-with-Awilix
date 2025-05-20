const {container,setup} = require('./awilix-setup');
console.log("Runing Awilix Setup ..")
setup();

const books = container.resolve('books');

class Library {
    constructor() {

        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    findBook(bookNo) {
        const book =  this.books.find(book => book.bookNo === bookNo);
        if(book){
            console.log("Found ",book);
            return book;
        }else{
            console.log("No Book found");
            return;
        }
    }
    
    deleteBook(bookNo){
        const book =  this.books.filter(book => book.bookNo == bookNo);
        console.log("Books to be deleted ",book);
        books.splice(books.findIndex(book => book.bookNo === bookNo) , 1)
        
    }
   
}


const library = new Library();