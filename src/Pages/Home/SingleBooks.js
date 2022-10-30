import React from "react";
import { MdDeleteOutline } from "react-icons/md";
const SingleBooks = ({ books, deleteBook }) => {
  return books.map((book) => (
    <tr key={book.bookid}>
      <td>{book.bookid}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td
        className="text-3xl text-red-500"
        onClick={() => deleteBook(book.bookid)}
      >
        <MdDeleteOutline></MdDeleteOutline>
      </td>
    </tr>
  ));
};

export default SingleBooks;
