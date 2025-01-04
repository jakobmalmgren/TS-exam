import { Book } from "./interfaces/Book.js"; // varför js när de e ts?
export const getData = async (): Promise<Book[]> => {
  let data: Book[] = [];
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books"
    );
    data = await response.json();
  } catch (error) {
    console.log(error);
  }

  return data;
};
