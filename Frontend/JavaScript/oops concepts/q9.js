/*
Write a function Book(title, author) that keeps track of how many books have been created using 
a static-like counter (but without using static methods or ES6 classes).*/

let count = 0;

const Book = function (title, book) {
  this.title = title;
  this.book = book;
  count++;
};

const book01 = new Book("online-bbok", "parish-journey");
const book02 = new Book("online-bbok", "parish-journey");

console.log(count);
