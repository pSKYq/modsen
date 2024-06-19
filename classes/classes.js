
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    displayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Year of publication: ${this.year}`);
    }
}

class Ebook extends Book {
    constructor(title, author, year, price) {
        super(title, author, year);
        this.price = price;
    }

    displayInfo() {
        super.displayInfo(); 
        console.log(`Price: $${this.price}`);
    }
}

let ebook = new Ebook("JavaScript: The Good Parts", "Douglas Crockford", 2023, 5.54);

ebook.displayInfo();
