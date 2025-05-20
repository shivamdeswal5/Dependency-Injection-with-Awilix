class DisplayBooks{

    displayAvailableBooks(books) {
        const availableBooks =  books.filter(book => book.isAvailable);
        console.log("Available books: ",availableBooks);
        return availableBooks;
    }

    displayBorrowedBooks(books) {
        const borrowedBooks =  books.filter(book => !book.isAvailable);
        console.log("Borrowed Books: ");
        return borrowedBooks;
    }
}

module.exports = DisplayBooks;