import logo from "./logo.svg";
import "./App.css";
import CartComponents from "./CartComponents";
import { useState } from "react";
import { data } from "./data";

function App() {
  const [items, setItems] = useState([...data]);
  const [infoCourse, setinfoCourse] = useState(null);
  const getInfoCourse = (event) => {
    console.log(event.target.value);
    setinfoCourse(event.target.value);
  };

  return (
    <div className="App">
      <CartComponents
        data={items}
        infoCourse={infoCourse}
        change={setinfoCourse}
        clickCourse={getInfoCourse}
      ></CartComponents>
    </div>
  );
}

export default App;
