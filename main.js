const { setup, container } = require('./awilix-setup');

setup();
const library = container.resolve('library');

library.addBook('NestJS', 'Kamil Myśliwiec', 101);
library.addBook('JavaScript', 'Douglas Crockford', 102);
library.getBookDetails();       
library.showAvailableBooks();    
library.borrowBook(101);         
library.showBorrowedBooks();     
library.returnBook(101);      
library.showAvailableBooks();    
