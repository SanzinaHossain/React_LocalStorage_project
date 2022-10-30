import React, { useEffect, useState } from "react";
import SingleBooks from "./SingleBooks";

const Home = () => {
  // getting the values of local storage
  const getDatafromLS = () => {
    const data = localStorage.getItem("books");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const [bookid, setBookId] = useState([]);
  const [title, setTitle] = useState([]);
  const [author, setAuthor] = useState([]);
  const [books, setBooks] = useState(getDatafromLS());
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    let book = {
      bookid,
      title,
      author,
    };
    setBooks([...books, book]);
    setAuthor("");
    setBookId("");
    setTitle("");
  };
  const deleteBook = (bookid) => {
    const filteredBooks = books.filter((element, index) => {
      return element.bookid !== bookid;
    });
    setBooks(filteredBooks);
  };
  // send data to localstorage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <div class="mt-4">
      <h1 class="text-cyan-600 text-3xl text-center font-bold">BookList APP</h1>
      <div class="grid grid-cols-2 gap-2 justify-around">
        {/* for form */}
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-cyan-600 ml-36 mt-16">
          <div className="card-body">
            <form
              autoComplete="off"
              className="form-group"
              onSubmit={handleAddBookSubmit}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book ID</span>
                </label>
                <input
                  type="number"
                  placeholder="Book ID"
                  className="input input-bordered"
                  onChange={(e) => setBookId(e.target.value)}
                  value={bookid}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Book Title"
                  className="input input-bordered"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book Author</span>
                </label>
                <input
                  type="text"
                  placeholder="Book Author"
                  className="input input-bordered"
                  onChange={(e) => setAuthor(e.target.value)}
                  value={author}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Add Book</button>
              </div>
            </form>
          </div>
        </div>
        {/* for data display */}
        <div className="mt-16 p-10">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Book Id</th>
                  <th>Book Name</th>
                  <th>Author</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {books.length > 0 && (
                <>
                  <tbody>
                    <SingleBooks
                      books={books}
                      deleteBook={deleteBook}
                    ></SingleBooks>
                  </tbody>
                </>
              )}
            </table>
            {books.length < 1 && (
              <>
                <h1 class=" pt-2 text-center text-4xl text-red-500">
                  There are no books in storage
                </h1>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
