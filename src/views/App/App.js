import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import MainTemplate from "../../components/MainTemplate/MainTemplate";
import Books from "../Books/Books";
import Home from "../Home/Home";
import BookDetail from "../BookDetail/BookDetail";
import Profile from "../Profile/Profile";


function App() {

  const nav = [
    {url: "/home", text: "Home", exact: "true"},
    {url: "/books", text: "Libri", exact: "false"}
  ];

  const authNav = [
        {url: "/profile", text: "Profilo", exact: "true"}
  ];

  return (
    <BrowserRouter>
      <MainTemplate
          headerAppTitle="ReactBookshelf"
          logo={logo}
          footerCopyright="Giulia Gottardo"
          navItems={nav}
          authNavItems={authNav}>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/books" element={<Books/>}/>
              <Route path="/books/:bookId" element={<BookDetail/>}/>
              <Route path="/books/category/:categoryName" element={<Books/>}/>
              <Route path="/profile" element={<Profile/>}/>
          </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App;

