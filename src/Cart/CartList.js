import React from "react";

function CartList({ cartItem }) {
  console.log(cartItem);
  return (
    <div class="flex items-center hover:bg-gray-100  px-6 py-5">
      <div class="flex w-2/5">
        <div class="w-20">
          <img
            class="h-24"
            src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-between ml-4 flex-grow">
          <span class="font-bold text-sm">Iphone 6S</span>
          <span class="text-red-500 text-xs">Apple</span>
        </div>
      </div>
      <div class="flex justify-center w-1/5">
        <p>{cartItem.quantity}</p>
      </div>
      <span class="text-center w-1/5 font-semibold text-sm">
        {cartItem.price}
      </span>
      <span class="text-center w-1/5 font-semibold text-sm">
        {cartItem.totalPrice}
      </span>
    </div>
  );
}

export default CartList;
