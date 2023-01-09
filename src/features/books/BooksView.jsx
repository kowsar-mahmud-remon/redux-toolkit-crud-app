import React from "react";
import { useSelector } from "react-redux";

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  return (
    <div className="my-10 text-center">
      <h2 className="text-4xl my-10">List of Books</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => {
                const { id, title, author } = book;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>
                      <button className="btn btn-ghost">Edit</button>
                      <button className="btn btn-ghost">Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BooksView;
