import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from '../features/books/AddBook';
import BooksView from '../features/books/BooksView';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import Error from '../pages/Error';
import Home from '../pages/Home';

const Index = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/show-books" element={<BooksView></BooksView>}></Route>
        <Route path="/add-book" element={<AddBook></AddBook>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default Index;