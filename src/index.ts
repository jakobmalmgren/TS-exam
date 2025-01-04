import { Book } from "./interfaces/Book";
import { getData } from "./fetchApi.js"; // varför js när de e ts??

const containerHeaderEl = document.querySelector(
  ".container__header"
) as HTMLElement;

const overlayEl = document.querySelector(".overlay") as HTMLElement;

const iconEl = document.querySelector(".overlay__icon-wrapper") as HTMLElement;

const bookColorEl = document.querySelector(".overlay__book-img") as HTMLElement;
const titleEl: Element | null = document.querySelector(
  ".overlay__book-info__title"
);
const authorEl: Element | null = document.querySelector(
  ".overlay__book-info__author"
);
const bookImageTitleEl: Element | null = document.querySelector(
  ".overlay__book-img__wrapper__title"
);

const bookImageAuthorEl: Element | null = document.querySelector(
  ".overlay__book-img__wrapper__author"
);

const infoTextEL: Element | null = document.querySelector(
  ".overlay__book-info__text"
);
const audienceEl: Element | null = document.querySelector(
  ".overlay__book-info__about__first-wrapper__audience"
);
const publishedEL: Element | null = document.querySelector(
  ".overlay__book-info__about__first-wrapper__published"
);
const pagesEL: Element | null = document.querySelector(
  ".overlay__book-info__about__second-wrapper__pages"
);
const publisherEl: Element | null = document.querySelector(
  ".overlay__book-info__about__second-wrapper__publisher"
);
const bookContainer: Element | null =
  document.querySelector(".container__books");

let containerBookel: NodeListOf<Element> =
  document.querySelectorAll(".container__book");

getData();

const contentBooks = async (index: number): Promise<void> => {
  const data: Book[] = await getData();
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
};

iconEl.addEventListener("click", (): void => {
  overlayEl.style.display = "none";
});

const renderMainPageInfo = async (): Promise<void> => {
  try {
    const data = await getData();

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

    containerBookel.forEach((el: Element, index: number) => {
      el.addEventListener("click", () => {
        if (index === 0) {
          contentBooks(0);
        } else if (index === 1) {
          contentBooks(1);
        } else if (index === 2) {
          contentBooks(2);
        } else if (index === 3) {
          contentBooks(3);
        } else if (index === 4) {
          contentBooks(4);
        } else if (index === 5) {
          contentBooks(5);
        } else if (index === 6) {
          contentBooks(6);
        } else if (index === 7) {
          contentBooks(7);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// containerBookel
// contentBooks
// måste fixa så de blir dynamiskt med id etc om man ex skulle lögga til fler böcker i databasen

renderMainPageInfo();

const searchFieldEl = document.querySelector("#search") as HTMLInputElement;

searchFieldEl?.addEventListener("input", async (e: Event) => {
  const data = await getData();
  const target = e.target as HTMLInputElement;
  console.log(target.value);
  let dataDisplay = data
    .filter((data: Book) => {
      if (target.value === "") {
        return data;
      } else if (
        data.title
          .toLocaleLowerCase()
          .includes(target.value.toLocaleLowerCase())
      ) {
        return data;
      }
    })
    .map((data: Book) => {
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

  containerBookel.forEach((el: Element) => {
    el.addEventListener("click", () => {
      const bookId = (el as HTMLElement).getAttribute("data-id");

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
});

//att göra

//styla css html
// statiska typer och interface
// Ha delat upp din kod i moduler i Typescript, alla interface ska ligga i en egen modul och importeras.
