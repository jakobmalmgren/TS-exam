// import { Book } from "./interfaces/Book";
const containerHeaderEl = document.querySelector(
  ".container__header"
) as HTMLElement;

const overlayEl = document.querySelector(".overlay") as HTMLElement;

const iconEl = document.querySelector(".overlay__icon-wrapper") as HTMLElement;

//interface, ska ändras sen till modul...
interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  year: number;
  pages: number;
  plot: string;
  color: string;
  audience: string;
}
// bookElements
const MargaretWiseBrownEl = document.querySelector(
  ".margaret-wise-brown"
) as HTMLElement;
const EricCarleEl = document.querySelector(".eric-carle") as HTMLElement;
const madeleineEl = document.querySelector(".madeleine") as HTMLElement;
const crockettEl = document.querySelector(".crockett") as HTMLElement;
const mauriceEl = document.querySelector(".maurice") as HTMLElement;
const ludvigEl = document.querySelector(".ludwig") as HTMLElement;
const beatrixEl = document.querySelector(".beatrix") as HTMLElement;
const ebEl = document.querySelector(".eb") as HTMLElement;
//

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

const getData = async (): Promise<Book[]> => {
  const response = await fetch(
    "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books"
  );
  const data: Book[] = await response.json();
  console.log(data.length);
  MargaretWiseBrownEl.style.backgroundColor = `${data[0].color}`;
  EricCarleEl.style.backgroundColor = `${data[1].color}`;
  madeleineEl.style.backgroundColor = `${data[2].color}`;
  crockettEl.style.backgroundColor = `${data[3].color}`;
  mauriceEl.style.backgroundColor = `${data[4].color}`;
  ludvigEl.style.backgroundColor = `${data[5].color}`;
  beatrixEl.style.backgroundColor = `${data[6].color}`;
  ebEl.style.backgroundColor = `${data[7].color}`;
  containerHeaderEl.innerHTML = `${data.length.toString()} Classic Childrens Books`;
  return data;
};
getData();

MargaretWiseBrownEl?.addEventListener("click", async () => {
  const data = await getData();
  bookColorEl.style.backgroundColor = `${data[0].color}`;
  console.log(data[0]);

  if (titleEl) {
    titleEl.innerHTML = data[0].title;
  }
  if (authorEl) {
    authorEl.innerHTML = data[0].author;
  }
  if (bookImageTitleEl) {
    bookImageTitleEl.innerHTML = data[0].title;
  }
  if (bookImageAuthorEl) {
    bookImageAuthorEl.innerHTML = data[0].author;
  }
  if (infoTextEL) {
    infoTextEL.innerHTML = data[0].plot;
  }
  if (audienceEl) {
    audienceEl.innerHTML = ` Audience: ${data[0].audience}`;
  }
  if (publishedEL) {
    publishedEL.innerHTML = `First published: ${data[0].year}`;
  }
  if (pagesEL) {
    pagesEL.innerHTML = `Pages: ${data[0].pages}`;
  }
  if (publisherEl) {
    publisherEl.innerHTML = ` Publisher:${data[0].publisher}`;
  }

  overlayEl.style.display = "flex";
});

EricCarleEl?.addEventListener("click", async () => {
  const data = await getData();
  console.log(data[1]);
  bookColorEl.style.backgroundColor = `${data[1].color}`;
  if (titleEl) {
    titleEl.innerHTML = data[1].title;
  }
  if (authorEl) {
    authorEl.innerHTML = data[1].author;
  }
  if (bookImageTitleEl) {
    bookImageTitleEl.innerHTML = data[1].title;
  }
  if (bookImageAuthorEl) {
    bookImageAuthorEl.innerHTML = data[1].author;
  }
  if (infoTextEL) {
    infoTextEL.innerHTML = data[1].plot;
  }
  if (audienceEl) {
    audienceEl.innerHTML = ` Audience: ${data[1].audience}`;
  }
  if (publishedEL) {
    publishedEL.innerHTML = `First published: ${data[1].year}`;
  }
  if (pagesEL) {
    pagesEL.innerHTML = `Pages: ${data[1].pages}`;
  }
  if (publisherEl) {
    publisherEl.innerHTML = ` Publisher:${data[1].publisher}`;
  }

  overlayEl.style.display = "flex";
});

madeleineEl?.addEventListener("click", async () => {
  const data = await getData();
  console.log(data[2]);
  bookColorEl.style.backgroundColor = `${data[2].color}`;
  if (titleEl) {
    titleEl.innerHTML = data[2].title;
  }
  if (authorEl) {
    authorEl.innerHTML = data[2].author;
  }
  if (bookImageTitleEl) {
    bookImageTitleEl.innerHTML = data[2].title;
  }
  if (bookImageAuthorEl) {
    bookImageAuthorEl.innerHTML = data[2].author;
  }
  if (infoTextEL) {
    infoTextEL.innerHTML = data[2].plot;
  }
  if (audienceEl) {
    audienceEl.innerHTML = ` Audience: ${data[2].audience}`;
  }
  if (publishedEL) {
    publishedEL.innerHTML = `First published: ${data[2].year}`;
  }
  if (pagesEL) {
    pagesEL.innerHTML = `Pages: ${data[2].pages}`;
  }
  if (publisherEl) {
    publisherEl.innerHTML = ` Publisher:${data[2].publisher}`;
  }

  overlayEl.style.display = "flex";
});

crockettEl?.addEventListener("click", async () => {
  const data = await getData();
  console.log(data[3]);
  bookColorEl.style.backgroundColor = `${data[3].color}`;
  if (titleEl) {
    titleEl.innerHTML = data[3].title;
  }
  if (authorEl) {
    authorEl.innerHTML = data[3].author;
  }
  if (bookImageTitleEl) {
    bookImageTitleEl.innerHTML = data[3].title;
  }
  if (bookImageAuthorEl) {
    bookImageAuthorEl.innerHTML = data[3].author;
  }
  if (infoTextEL) {
    infoTextEL.innerHTML = data[3].plot;
  }
  if (audienceEl) {
    audienceEl.innerHTML = ` Audience: ${data[3].audience}`;
  }
  if (publishedEL) {
    publishedEL.innerHTML = `First published: ${data[3].year}`;
  }
  if (pagesEL) {
    pagesEL.innerHTML = `Pages: ${data[3].pages}`;
  }
  if (publisherEl) {
    publisherEl.innerHTML = ` Publisher:${data[3].publisher}`;
  }

  overlayEl.style.display = "flex";
});

mauriceEl?.addEventListener("click", async () => {
  const data = await getData();
  console.log(data[4]);
  bookColorEl.style.backgroundColor = `${data[4].color}`;
  if (titleEl) {
    titleEl.innerHTML = data[4].title;
  }
  if (authorEl) {
    authorEl.innerHTML = data[4].author;
  }
  if (bookImageTitleEl) {
    bookImageTitleEl.innerHTML = data[4].title;
  }
  if (bookImageAuthorEl) {
    bookImageAuthorEl.innerHTML = data[4].author;
  }
  if (infoTextEL) {
    infoTextEL.innerHTML = data[4].plot;
  }
  if (audienceEl) {
    audienceEl.innerHTML = ` Audience: ${data[4].audience}`;
  }
  if (publishedEL) {
    publishedEL.innerHTML = `First published: ${data[4].year}`;
  }
  if (pagesEL) {
    pagesEL.innerHTML = `Pages: ${data[4].pages}`;
  }
  if (publisherEl) {
    publisherEl.innerHTML = ` Publisher:${data[4].publisher}`;
  }

  overlayEl.style.display = "flex";
});

ludvigEl?.addEventListener("click", async () => {
  const data = await getData();
  bookColorEl.style.backgroundColor = `${data[5].color}`;
  console.log(data[5]);
  if (titleEl) {
    titleEl.innerHTML = data[5].title;
  }
  if (authorEl) {
    authorEl.innerHTML = data[5].author;
  }
  if (bookImageTitleEl) {
    bookImageTitleEl.innerHTML = data[5].title;
  }
  if (bookImageAuthorEl) {
    bookImageAuthorEl.innerHTML = data[5].author;
  }
  if (infoTextEL) {
    infoTextEL.innerHTML = data[5].plot;
  }
  if (audienceEl) {
    audienceEl.innerHTML = ` Audience: ${data[5].audience}`;
  }
  if (publishedEL) {
    publishedEL.innerHTML = `First published: ${data[5].year}`;
  }
  if (pagesEL) {
    pagesEL.innerHTML = `Pages: ${data[5].pages}`;
  }
  if (publisherEl) {
    publisherEl.innerHTML = ` Publisher:${data[5].publisher}`;
  }

  overlayEl.style.display = "flex";
});

beatrixEl?.addEventListener("click", async () => {
  const data = await getData();
  console.log(data[6]);
  bookColorEl.style.backgroundColor = `${data[6].color}`;
  if (titleEl) {
    titleEl.innerHTML = data[6].title;
  }
  if (authorEl) {
    authorEl.innerHTML = data[6].author;
  }
  if (bookImageTitleEl) {
    bookImageTitleEl.innerHTML = data[6].title;
  }
  if (bookImageAuthorEl) {
    bookImageAuthorEl.innerHTML = data[6].author;
  }
  if (infoTextEL) {
    infoTextEL.innerHTML = data[6].plot;
  }
  if (audienceEl) {
    audienceEl.innerHTML = ` Audience: ${data[6].audience}`;
  }
  if (publishedEL) {
    publishedEL.innerHTML = `First published: ${data[6].year}`;
  }
  if (pagesEL) {
    pagesEL.innerHTML = `Pages: ${data[6].pages}`;
  }
  if (publisherEl) {
    publisherEl.innerHTML = ` Publisher:${data[6].publisher}`;
  }

  overlayEl.style.display = "flex";
});

ebEl?.addEventListener("click", async () => {
  const data = await getData();
  console.log(data[7]);
  bookColorEl.style.backgroundColor = `${data[7].color}`;
  if (titleEl) {
    titleEl.innerHTML = data[7].title;
  }
  if (authorEl) {
    authorEl.innerHTML = data[7].author;
  }
  if (bookImageTitleEl) {
    bookImageTitleEl.innerHTML = data[7].title;
  }
  if (bookImageAuthorEl) {
    bookImageAuthorEl.innerHTML = data[7].author;
  }
  if (infoTextEL) {
    infoTextEL.innerHTML = data[7].plot;
  }
  if (audienceEl) {
    audienceEl.innerHTML = ` Audience: ${data[7].audience}`;
  }
  if (publishedEL) {
    publishedEL.innerHTML = `First published: ${data[7].year}`;
  }
  if (pagesEL) {
    pagesEL.innerHTML = `Pages: ${data[7].pages}`;
  }
  if (publisherEl) {
    publisherEl.innerHTML = ` Publisher:${data[7].publisher}`;
  }

  overlayEl.style.display = "flex";
});

iconEl.addEventListener("click", () => {
  overlayEl.style.display = "none";
});

//try catch
//Det ska gå att söka på en specifik bok via ett inputfält och få information om denna.
//Ha delat upp din kod i moduler i Typescript, alla interface ska ligga i en egen modul och importeras.

///////////////////////////

// skriva om alla de innehttml ettc såja sätter de till en variable så mindre kod

// Använda dig av statiska typer och interface
// API-svaret (arrayen du får tillbaka) ska ha en datatyp och får inte vara any. Ex: const data: Dog[] = await response.json();

// Lista alla böcker från API:et,,,, manuellt el ne?? frågade jesper

// soryera upp i filer typ ts med så snyggare
// sortera upp interfaces i filer..
// kolla kraven
