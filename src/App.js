import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import KegiatanList from "./components/KegiatanList";
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
    <div>
      <h1>{title}</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Header />}></Route>
          <Route path="/user" element={<UserLIst />}></Route>
          <Route path="/kegiatan" element={<KegiatanList />}></Route>
          <Route path="/product" element={<ProductList />}></Route>
        </Routes>
      </BrowserRouter>
      {/*  
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}
          </li>
        ))}
      </ul>
        */}
      {/* <button onClick={() => ClickMe("Zulfan")}>Click Me</button> */}
      <h1>Namanya : {nama}</h1>(
      <a href={link} target="blank">
        Go To my repo github
      </a>
      )
    </div>
  );
}

export default App;
