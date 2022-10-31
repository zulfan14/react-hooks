import { useState } from "react";
import Header from "./components/Header";
function App() {
  const [title, setTitle] = useState("Welcome To React HOOKS");
  const [number, setNumber] = useState(10);
  const link = "https://github.com/zulfan14/";

  const [product] = useState([
    { id: 1, title: "product1", price: 899 },
    { id: 2, title: "Product2", price: 879 },
    { id: 3, title: "Produk2", price: 869 },
  ]);

  const [user] = useState([
    { id: 1, name: "Andi", jk: "lk" },
    { id: 2, name: "Budi", jk: "lk" },
    { id: 3, name: "Ani", jk: "pr" },
  ]);

  const Change = () => {
    setTitle("Title Changed");
    setNumber(number + 1);
  };

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
      <ul>
        {product.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}
          </li>
        ))}
      </ul>
      <h1>Ini adalah nama2 pengguna</h1>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            {user.name} - {user.jk}
          </li>
        ))}
      </ul>
      {/* <button onClick={() => ClickMe("Zulfan")}>Click Me</button> */}
      <button onClick={Change}>Change</button>
    </div>
  );
}

export default App;
