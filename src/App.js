import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


//Author
import { Author } from "./pages/author";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Author />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
