import React from "react";
import CartItem from "./CartItem";
import TotalCostComponent from "./TotalCostComponent";

export default function CartComponents({
  data,
  infoCourse,
  clickCourse,
  change,
}) {
  return (
    <div>
      <div className="basket">
        <div className="basket-labels">
          <ul>
            <li className="item item-heading">Item</li>
            <li className="price">Price</li>
            <li className="subtotal">Subtotal</li>
          </ul>
        </div>

        {data.map((course, index) => {
          return (
            <CartItem key={course.name + index} course={course} index={index} />
          );
        })}
      </div>
      <aside>
        <TotalCostComponent></TotalCostComponent>
      </aside>
    </div>
  );
}
