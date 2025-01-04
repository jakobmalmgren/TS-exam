var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { overlayEl, iconEl, bookContainer, searchFieldEl, containerHeaderEl, } from "./variables.js";
import { getData } from "./fetchApi.js";
import { contentBooks } from "./modalRender.js";
// har kvar den i ts huvudfil för det är en let och värdet ska ändras i denna modulen.
let containerBookel = document.querySelectorAll(".container__book");
getData();
const renderMainPageInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield getData();
        containerHeaderEl.innerHTML = `${data.length.toString()} Classic Childrens Books`;
        if (bookContainer) {
            for (let i = 0; i < data.length; i++) {
                bookContainer.innerHTML += `   <section class="container__book" data-id="${data[i].id}"  style="background-color: ${data[i].color}">
        <div class = "container__book__detail"> </div>
        <section class="container__book__info">
          <h1 class="container__title">${data[i].title}</h1>
          <p class="container__author">${data[i].author}</p>
        </section>
      </section>`;
            }
        }
        containerBookel = document.querySelectorAll(".container__book");
        containerBookel.forEach((el, index) => {
            el.addEventListener("click", () => {
                if (index === 0) {
                    contentBooks(0);
                }
                else if (index === 1) {
                    contentBooks(1);
                }
                else if (index === 2) {
                    contentBooks(2);
                }
                else if (index === 3) {
                    contentBooks(3);
                }
                else if (index === 4) {
                    contentBooks(4);
                }
                else if (index === 5) {
                    contentBooks(5);
                }
                else if (index === 6) {
                    contentBooks(6);
                }
                else if (index === 7) {
                    contentBooks(7);
                }
            });
        });
    }
    catch (error) {
        console.log(error);
    }
});
renderMainPageInfo();
// skulle kunna göra om så när containerBookEl jobbar med
//contentBooks så de blir mer dynamiskt när nån kanske lägger till
// fler böcker i API:t, men det fungerar för denna uppg.
searchFieldEl === null || searchFieldEl === void 0 ? void 0 : searchFieldEl.addEventListener("input", (e) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getData();
    const target = e.target;
    console.log(target.value);
    let dataDisplay = data
        .filter((data) => {
        if (target.value === "") {
            return data;
        }
        else if (data.title
            .toLocaleLowerCase()
            .includes(target.value.toLocaleLowerCase())) {
            return data;
        }
    })
        .map((data) => {
        return `   <section class="container__book" data-id="${data.id}" style="background-color: ${data.color}">
      <div class = "container__book__detail"> </div>
        <section class="container__book__info">
          <h1 class="container__title">${data.title}</h1>
          <p class="container__author">${data.author}</p>
        </section>
      </section>`;
    });
    if (bookContainer) {
        bookContainer.innerHTML = dataDisplay.join("");
    }
    containerBookel = document.querySelectorAll(".container__book");
    containerBookel.forEach((el) => {
        el.addEventListener("click", () => {
            const bookId = el.getAttribute("data-id");
            if (bookId) {
                const selectedBook = data.find((book) => book.id === parseInt(bookId));
                if (selectedBook) {
                    const selectedBookIndex = data.indexOf(selectedBook);
                    contentBooks(selectedBookIndex);
                }
            }
        });
    });
}));
iconEl.addEventListener("click", () => {
    overlayEl.style.display = "none";
});
