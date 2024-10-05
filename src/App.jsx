import React from "react";
import Header from "./Componets/Header";
import Create from "./Componets/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPost from "./Componets/AllPost";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllPost />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
