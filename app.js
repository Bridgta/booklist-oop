//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
//UI Constructor
function UI() {}

UI.prototype.addBookToList = function (book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</tf>
    <td>${book.author}</tf>
    <td>${book.isbn}</tf>
    <td><a href="#" class="delete">X<a></td>
    `;

    list.appendChild(row);
};

document.getElementById("book-form").addEventListener("submit", function (e) {
    const title = document.getElementById("title").value,
        author = document.getElementById("author").value,
        isbn = document.getElementById("isbn");

    const book = new Book(title, author, isbn);

    const ui = new UI();

    ui.addBookToList();

    e.preventDefault();
});
