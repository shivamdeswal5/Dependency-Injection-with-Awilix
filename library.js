const {container,setup} = require('./awilix-setup');
console.log("Runing Awilix Setup ..");
setup();

class Library {
    static allBooks = [];

    constructor({books}) {
        this.book = new books('Nestjs','Kamil Myśliwiec', 101)
    }

    addBook(tile,author,bookNo) {
        Library.allBooks.push(this.book);
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
console.log("All Books: ", library.allBooks);
// library.addBook('Nestjs','Kamil Myśliwiec', 101)