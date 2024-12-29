// variabler
const bookEl = document.querySelector(".container__books") as HTMLBodyElement;
const containerHeaderEl = document.querySelector(
  ".container__header"
) as HTMLBodyElement;

//interface, ska ändras sen till modul...
interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  year: number;
  pages: number;
  plot: string;
}

// hämtar data

const getData = async (): Promise<Book[]> => {
  const response = await fetch(
    "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books"
  );
  const data: Book[] = await response.json();
  console.log(data.length);

  return data;
};

// skapar böckerna
const renderMainPage = async () => {
  let data = await getData();
  for (let i = 0; i < data.length; i++) {
    bookEl.innerHTML += `<section class="container__book">
          <h1 class="container__title">${data[i].title}</h1>
          <p class="container__author">${data[i].author}</p>
        </section>`;
  }
  containerHeaderEl.innerHTML = `${data.length.toString()} Classic Childrens Books`;
};
renderMainPage();
