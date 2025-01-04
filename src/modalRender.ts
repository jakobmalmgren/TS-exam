import { Book } from "./interfaces/Book.js";
import { getData } from "./fetchApi.js";
import {
  bookColorEl,
  titleEl,
  authorEl,
  bookImageTitleEl,
  bookImageAuthorEl,
  infoTextEL,
  audienceEl,
  publishedEL,
  pagesEL,
  publisherEl,
  overlayEl,
} from "./variables.js";

export const contentBooks = async (index: number): Promise<void> => {
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
