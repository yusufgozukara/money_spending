import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  const [money, setMoney] = useState(100);

  return (
    <>
      <Header money={money} />
    </>
  );
}

export default App;
