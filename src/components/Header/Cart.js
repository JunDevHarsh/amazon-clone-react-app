import React from "react";
import CartIcon from "../../images/cart-icon.svg";

function Cart() {
  return (
    <div className="relative flex items-end w-[4.75rem] h-11 border-[1px] py-[9px] px-[5px] border-transparent hover:border-white rounded-[0.25rem] cursor-pointer">
      <img src={CartIcon} alt="cart-icon" className="h-full" />
      <span className="absolute top-0 left-[35%] -translate-x-[35%] font-semibold text-amazon-orange">
        0
      </span>
      <span className="font-medium text-white relative top-1 tracking-wider">
        Cart
      </span>
    </div>
  );
}

export default Cart;
