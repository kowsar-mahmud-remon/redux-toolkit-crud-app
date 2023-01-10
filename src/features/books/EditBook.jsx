import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BooksSlice";

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate("/show-books", { replace: true });
  };

  return (
    <div className="card flex-shrink-0 w-1/2 mx-auto shadow-2xl bg-base-100">
      <h1 className="text-4xl text-center mt-10">Edit Book</h1>
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
            Update Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
