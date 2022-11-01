import { useState, useEffect } from "react";
import Header from "./components/Header";
import KegiatanList from "./components/KegiatanList";
import ProductList from "./components/ProductList";
import UserLIst from "./components/UserLIst";
function App() {
  const [title, setTitle] = useState("Welcome To React HOOKS");
  const [number, setNumber] = useState(10);
  const link = "https://github.com/zulfan14/";

  const [products, setProducts] = useState([
    { id: 1, title: "product1", price: 899 },
    { id: 2, title: "Product2", price: 879 },
    { id: 3, title: "Produk2", price: 869 },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "Andi", jk: "lk" },
    { id: 2, name: "Budi", jk: "lk" },
    { id: 3, name: "Ani", jk: "pr" },
  ]);

  const [kegiatans] = useState([
    { id: 1, nama: "belajar", jam: 10 },
    { id: 2, nama: "makan", jam: 11 },
  ]);

  const [nama, setNama] = useState("Zulfan");

  const Change = () => {
    setTitle("Title Changed");
    setNumber(number + 1);
  };

  const deleteUsers = (userId) => {
    const newUser = users.filter((user) => user.id !== userId);
    setUsers(newUser);
  };

  const actionProducts = (productid) => {
    const newProducts = products.filter((product) => product.id !== productid);
    setProducts(newProducts);
  };

  useEffect(() => console.log("Use Effect Running"), [nama]);

  // {
  //   const ClickMe = (name) => {
  //     console.log("Cliked By " + name);
  //   };
  // }

  return (
    <div>
      <Header />
      <h1>{title}</h1>
      <h1>{number}</h1>
      <a href={link} target="blank">
        Go To my repo github
      </a>
      {/*  
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}
          </li>
        ))}
      </ul>
        */}
      <ProductList products={products} actionProducts={actionProducts} />
      <h1>Ini adalah nama2 pengguna</h1>
      <UserLIst usersList={users} deleteUsers={deleteUsers} />
      {/* <button onClick={() => ClickMe("Zulfan")}>Click Me</button> */}
      <button onClick={Change}>Change</button>

      <h1>Ini adalah Jadwal kegiatan</h1>
      <KegiatanList kegiatanList={kegiatans} />
      <h1>Namanya : {nama}</h1>

      <button
        onClick={() => {
          setNama("Muhammad Zulfan");
        }}
      >
        Ganti Nama
      </button>
    </div>
  );
}

export default App;
