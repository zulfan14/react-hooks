function App() {
  const title = "Welcome To React HOOKS";
  const number = 12;
  const link = "https://github.com/zulfan14/";
  return (
    <div>
      <h1>{title}</h1>
      <h1>{number}</h1>
      <a href={link}>Go To my repo github</a>
    </div>
  );
}

export default App;
