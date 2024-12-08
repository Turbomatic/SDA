function Book(title, author, year, pages, isReserved) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.isReserved = isReserved;
}

let book1 = new Book("QWERT", "YUIO", 1960, 281, false);
let book2 = new Book("ASDF", "GHJK", 1949, 328, true);
let book3 = new Book("ZXCV", "BNM", 1851, 635, false);

function Library(name, address) {
  this.name = name;
  this.address = address;
  this.books = [];
}

Library.prototype.addBook = function (book) {
  if (book instanceof Book) {
    this.books.push(book);
    console.log("Added it");
  } else {
    console.log("Not a book");
  }
};

Library.prototype.searchBook = function (title) {
  found = this.books.find(
    (book) => book.title.toLowerCase() === title.toLowerCase()
  );

  if (found) {
    console.log("Found it");
    return found;
  } else {
    console.log("Not found it");
    return null;
  }
};

Library.prototype.deleteBook = function (title) {
    const bookIndex = this.books.findIndex(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
  
    if (bookIndex !== -1) {
      this.books[bookIndex] = null;
      console.log("Deleted");
    } else {
      console.log("Can't delete because the book is not there");
    }
  };
  
Library.prototype.reserveBook = function (title) {
  book = this.searchBook(title);
  if (book && !book.isReserved) {
    book.isReserved = true;
    console.log("Reserved it");
  } else if (book && book.isReserved) {
    console.log("Cant reserve it");
  }
};

Library.prototype.returnBook = function (title) {
  book = this.searchBook(title);
  if (book && book.isReserved) {
    book.isReserved = false;
    console.log("Returned it");
  } else {
    console.log("Didnt return it");
  }
};

Library.prototype.displayBooks = function () {
  if (this.books.length === 0) {
    console.log("No books");
  } else {
    console.log("Books:");
    this.books.forEach((book) => console.log(book.title));
  }
};

let Thelibrary = new Library("BIUHGHJIUGVHIH", "JBOKJVHHJVH");

Thelibrary.addBook(book1);
Thelibrary.addBook(book2);
Thelibrary.addBook(book3);

Thelibrary.searchBook("ASDF");
Thelibrary.searchBook("vgyugvgyuggvyg");

Thelibrary.reserveBook("QWERT");
Thelibrary.reserveBook("QWERT");

Thelibrary.returnBook("QWERT");
Thelibrary.returnBook("QWERT");

Thelibrary.deleteBook("QWERT");
Thelibrary.deleteBook("wefbefbebfe");

Thelibrary.displayBooks();
