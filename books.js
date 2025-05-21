class Books {
    constructor(title, author, bookNo) {
        this.title = title;
        this.author = author;
        this.bookNo = bookNo;
        this.isAvailable = true;
    }

    getDetails() {
        console.log(`Book Details:\nTitle: ${this.title}\nAuthor: ${this.author}\nBook No: ${this.bookNo}`);
    }

    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`Book ${this.bookNo} borrowed.`);
            return true;
        }
        console.log(`Book ${this.bookNo} is not available.`);
        return false;
    }

    returnBook() {
        this.isAvailable = true;
        console.log(`Book ${this.bookNo} returned.`);
    }
}

module.exports = Books;
