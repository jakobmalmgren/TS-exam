import { Book } from "./interfaces/Book.js";
import {
  overlayEl,
  iconEl,
  bookContainer,
  searchFieldEl,
  containerHeaderEl,
} from "./variables.js";
import { getData } from "./fetchApi.js";
import { contentBooks } from "./modalRender.js";

// har kvar den i ts huvudfil för det är en let och värdet ska ändras i denna modulen.
let containerBookel: NodeListOf<Element> =
  document.querySelectorAll(".container__book");

getData();

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
        //
        const bookId: any = (el as HTMLElement).getAttribute("data-id");

        if (index === bookId - 1) {
          console.log("hje");
          contentBooks(index);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};

renderMainPageInfo();

searchFieldEl?.addEventListener("input", async (e: Event) => {
  const data = await getData();
  const target = e.target as HTMLInputElement;
  console.log(target.value);
  let dataDisplay: string[] = data
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
      const bookId: string | null = (el as HTMLElement).getAttribute("data-id");

      if (bookId) {
        const selectedBook: Book | undefined = data.find(
          (book) => book.id === parseInt(bookId)
        );

        if (selectedBook) {
          const selectedBookIndex: number = data.indexOf(selectedBook);
          contentBooks(selectedBookIndex);
        }
      }
    });
  });
});

iconEl.addEventListener("click", (): void => {
  overlayEl.style.display = "none";
});
