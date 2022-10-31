import Header from "./components/Header";
function App() {
  const title = "Welcome To React HOOKS";
  const number = 12;
  const link = "https://github.com/zulfan14/";

  const ClickMe = (name) => {
    console.log("Cliked By " + name);
  };

  return (
    <div>
      <Header />
      <h1>{title}</h1>
      <h1>{number}</h1>
      <a href={link}>Go To my repo github</a>
      <button onClick={() => ClickMe("Zulfan")}>Click Me</button>
    </div>
  );
}

export default App;
