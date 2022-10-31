import { useState } from "react";
import Header from "./components/Header";
function App() {
  const [title, setTitle] = useState("Welcome To React HOOKS");
  const [number, setNumber] = useState(12);
  const link = "https://github.com/zulfan14/";

  const Change = () => {
    setTitle("Title Changed");
    setNumber(10);
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
      <a href={link}>Go To my repo github</a>
      {/* <button onClick={() => ClickMe("Zulfan")}>Click Me</button> */}
      <button onClick={Change}>Change</button>
    </div>
  );
}

export default App;
