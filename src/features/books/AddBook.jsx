import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "./BooksSlice";
import { v4 as uuidv4 } from "uuid";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title, author };
    dispatch(addBook(book));
    navigate("/show-books", { replace: true });
  };

  return (
    <div className="my-10">
      <h2 className="text-4xl my-10 text-center">Add Book</h2>
      <div className="card flex-shrink-0 w-1/2 mx-auto shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Author</span>
            </label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              name="author"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
