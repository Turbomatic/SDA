
Library.prototype.unreserveBook = function (title) {
    book = this.searchBook(title);
     if (book && book.isReserved) {
       book.isReserved = false;
       console.log(`"${book.title}" has been returned and is now available.`);
     } else if (book && !book.isReserved) {
       console.log(`"${book.title}" was not reserved.`);
     }
   };
   
   Library.prototype.displayAllBooks = function () {
     if (this.books.length === 0) {
       console.log("No books available in the library.");
     } else {
       console.log("Books in the library:");
       this.books.forEach((book) =>
         console.log(`- "${book.title}" by ${book.author}`)
       );
     }
   };
   
   let myLibrary = new Library("City Library", "123 Main St");
   
   myLibrary.addBook(book1);
   myLibrary.addBook(book2);
   myLibrary.addBook(book3);
   
   myLibrary.searchBook("ASDF");
   myLibrary.searchBook("Non-existent Book");
   
   myLibrary.reserveBook("QWERT");
   myLibrary.reserveBook("QWERT");
   myLibrary.unreserveBook("QWERT");
   myLibrary.unreserveBook("QWERT");
   
   myLibrary.deleteBook("ZXCV");
   myLibrary.deleteBook("Non-existent Book");
   
   myLibrary.displayAllBooks();
   