import React, { useState } from "react";

export default function CartItem({ course }) {
  const [selection, setSelection] = useState(0);

  const handleSelect = (event) => {
    setSelection(event.target.value);
  };

  let a = course.opt[selection].price - course.opt[selection].priceDiscount;
  console.log(a);
  const [price1, setPrice] = useState(0);
  return (
    <div class="basket-product">
      <div class="item">
        <div class="product-image">
          <img
            src="http://placehold.it/120x166"
            alt="Placholder Image 2"
            class="product-frame"
          />
        </div>
        <div class="product-details">
          <h1>{course.name}</h1>
          <p>
            <strong>{course.opt[selection].name}</strong>
          </p>
          <select
            name="cars"
            id="cars"
            class="quantity-field"
            value={selection}
            onChange={(event) => handleSelect(event)}
          >
            {course.opt.map((sub, index) => (
              <option key={sub.price} value={index}>
                {sub.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div class="price">
        {course.opt[selection].priceDiscount}
        <br></br>({course.opt[selection].percentDiscount}% off)
        <br></br>£{course.opt[selection].price}
      </div>

      <div>
        - £{course.opt[selection].price - course.opt[selection].priceDiscount}
      </div>
    </div>
  );
}
