import logo from "./logo.svg";
import "./App.css";
import CartComponents from "./CartComponents";
import { useState } from "react";
import { data } from "./data";
import TotalCostComponent from "./TotalCostComponent";
import CartItem from "./CartItem";

function App() {
  const [items, setItems] = useState([...data]);
  const [infoCourse, setinfoCourse] = useState(null);
  const getInfoCourse = (event) => {
    setinfoCourse(event.target.value);
  };

  const [isCheckCost, setCheckCost] = useState([]);
  const [isCheckName, setCheckname] = useState([]);

  const selectCourse = (event) => {
    const { value, checked, name } = event.target;
    const totalPrice = isCheckCost.reduce((previousValue, currentValue) => {
      return previousValue + data[currentValue].opt[name].priceDiscount;
    }, data[value].opt[name].priceDiscount);
    if (checked) {
      setCheckCost([...isCheckCost, Number(value)]);
      setCheckname([...isCheckName, Number(name)]);
      console.log(totalPrice);
      setTotal(Number(totalPrice));
    } else {
      setCheckCost(isCheckCost.filter((e) => e !== Number(value)));
      setCheckname(isCheckName.filter((e) => e !== Number(name)));
      setTotal(
        Number(totalPrice) - Number(data[value].opt[name].priceDiscount * 2)
      );
      console.log(Number(totalPrice) - Number(value));
    }
  };

  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      {/* <CartComponents
        data={items}
        infoCourse={infoCourse}
        change={setinfoCourse}
        clickCourse={getInfoCourse}
        selectCourse={selectCourse}
      ></CartComponents> */}
      <div className="basket">
        <div className="basket-labels">
          <ul>
            <li className="item item-heading">Item</li>
            <li className="price">Price</li>
            <li className="subtotal">Subtotal</li>
          </ul>
        </div>

        {items.map((course, index) => {
          return (
            <CartItem
              key={course.name + index}
              course={course}
              selectCourse={selectCourse}
              index={index}
            />
          );
        })}
      </div>
      <aside>
        <TotalCostComponent total={total}></TotalCostComponent>
      </aside>
    </div>
  );
}

export default App;
