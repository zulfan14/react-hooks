import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import KegiatanList from "./components/KegiatanList";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import UserLIst from "./components/UserLIst";
function App() {
  const [title] = useState("Welcome To React HOOKS");
  // const [number, setNumber] = useState(10);
  const link = "https://github.com/zulfan14/";

  const [nama] = useState("Zulfan");

  // {
  //   const ClickMe = (name) => {
  //     console.log("Cliked By " + name);
  //   };
  // }

  return (
    <div className="container mt-4">
      <Navbar />
      <h1>{title}</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Header />}></Route>
          <Route path="/user" element={<UserLIst />}></Route>
          <Route path="/kegiatan" element={<KegiatanList />}></Route>
          <Route path="/product" element={<ProductList />}></Route>
        </Routes>
      </BrowserRouter>
      <h1>Namanya : {nama}</h1>(
      <a href={link} target="blank">
        Go To my repo github
      </a>
      )
    </div>
  );
}

export default App;
