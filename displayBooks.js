class DisplayBooks {
    displayAvailableBooks(books) {
        const available = books.filter(book => book.isAvailable);
        console.log("\nAvailable Books:");
        available.forEach(book => book.getDetails());
        return available;
    }

    displayBorrowedBooks(books) {
        const borrowed = books.filter(book => !book.isAvailable);
        console.log("\nBorrowed Books:");
        borrowed.forEach(book => book.getDetails());
        return borrowed;
    }
}

module.exports = DisplayBooks;
