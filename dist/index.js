var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const containerHeaderEl = document.querySelector(".container__header");
const overlayEl = document.querySelector(".overlay");
const iconEl = document.querySelector(".overlay__icon-wrapper");
const bookColorEl = document.querySelector(".overlay__book-img");
const titleEl = document.querySelector(".overlay__book-info__title");
const authorEl = document.querySelector(".overlay__book-info__author");
const bookImageTitleEl = document.querySelector(".overlay__book-img__wrapper__title");
const bookImageAuthorEl = document.querySelector(".overlay__book-img__wrapper__author");
const infoTextEL = document.querySelector(".overlay__book-info__text");
const audienceEl = document.querySelector(".overlay__book-info__about__first-wrapper__audience");
const publishedEL = document.querySelector(".overlay__book-info__about__first-wrapper__published");
const pagesEL = document.querySelector(".overlay__book-info__about__second-wrapper__pages");
const publisherEl = document.querySelector(".overlay__book-info__about__second-wrapper__publisher");
const contentBooks = (index) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getData();
    bookColorEl.style.backgroundColor = `${data[index].color}`;
    if (titleEl) {
        titleEl.innerHTML = data[index].title;
    }
    if (authorEl) {
        authorEl.innerHTML = data[index].author;
    }
    if (bookImageTitleEl) {
        bookImageTitleEl.innerHTML = data[index].title;
    }
    if (bookImageAuthorEl) {
        bookImageAuthorEl.innerHTML = data[index].author;
    }
    if (infoTextEL) {
        infoTextEL.innerHTML = data[index].plot;
    }
    if (audienceEl) {
        audienceEl.innerHTML = ` Audience: ${data[index].audience}`;
    }
    if (publishedEL) {
        publishedEL.innerHTML = `First published: ${data[index].year}`;
    }
    if (pagesEL) {
        pagesEL.innerHTML = `Pages: ${data[index].pages}`;
    }
    if (publisherEl) {
        publisherEl.innerHTML = ` Publisher:${data[index].publisher}`;
    }
    overlayEl.style.display = "flex";
});
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    let data = [];
    try {
        const response = yield fetch("https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books");
        data = yield response.json();
    }
    catch (error) {
        console.log(error);
    }
    return data;
});
getData();
iconEl.addEventListener("click", () => {
    overlayEl.style.display = "none";
});
const bookContainer = document.querySelector(".container__books");
let containerBookel = document.querySelectorAll(".container__book");
const renderMainPageInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield getData();
        containerHeaderEl.innerHTML = `${data.length.toString()} Classic Childrens Books`;
        if (bookContainer) {
            for (let i = 0; i < data.length; i++) {
                bookContainer.innerHTML += `   <section class="container__book" data-id="${data[i].id}"  style="background-color: ${data[i].color}">
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
const searchFieldEl = document.querySelector("#search");
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
                // Find the corresponding book data by id
                const selectedBook = data.find((book) => book.id === parseInt(bookId));
                if (selectedBook) {
                    // Call contentBooks with the index of the selected book
                    const selectedBookIndex = data.indexOf(selectedBook);
                    contentBooks(selectedBookIndex);
                }
            }
        });
    });
}));
export {};
//att göra
//styla css html
// statiska typer och interface
// Ha delat upp din kod i moduler i Typescript, alla interface ska ligga i en egen modul och importeras.
