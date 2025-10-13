function createBookCard(imageUrl, price) {
  const image = React.createElement("img", {
    src: imageUrl,
    width: "150",
    height: "150",
    alt: "book-image"
  });

  const h4 = React.createElement("h4", null,` Price: ${price}/-`);

  return React.createElement("div", { className: "card" }, image, h4);
}

const books = [
  {
    image: "https://tse4.mm.bing.net/th/id/OIP.YSJE-m47WRFAFX1JP1r2jgHaL3?pid=Api&P=0&h=180",
    price: 345
  },
  {
    image: "https://cdn.pixabay.com/photo/2016/10/26/10/05/book-1771073_1280.jpg",
    price: 299
  },
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/044/280/984/small/stack-of-books-on-a-brown-background-concept-for-world-book-day-photo.jpg",
    price: 399
  }
];

const cards = books.map(book => createBookCard(book.image, book.price));

const container = React.createElement("div", { className: "card-container" }, ...cards);

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(container);