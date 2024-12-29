"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// variabler
const bookEl = document.querySelector(".container__books");
const containerHeaderEl = document.querySelector(".container__header");
// hämtar data
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books");
    const data = yield response.json();
    console.log(data.length);
    return data;
});
// skapar böckerna
const createBook = () => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield getData();
    for (let i = 0; i < data.length; i++) {
        bookEl.innerHTML += `<section class="container__book">
          <h1 class="container__title">${data[i].title}</h1>
          <p class="container__author">${data[i].author}</p>
        </section>`;
    }
    containerHeaderEl.innerHTML = `${data.length.toString()} Classic Childrens Books`;
});
createBook();
