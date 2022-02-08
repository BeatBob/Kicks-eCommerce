import React from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

function CartList({ img, desc, name, price, quantity, total, id }) {
  function deleting() {
    deleteDoc(doc(db, "cartData", id));
  }

  return (
    <div className="flex items-center hover:bg-gray-100  px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={img} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{name}</span>
          <span className="text-red-500 text-xs">{desc}</span>
        </div>
      </div>
      <div className="flex justify-center w-1/5">{quantity}</div>
      <span className="text-center w-1/5 font-semibold text-sm">{price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">{total}</span>
      <div className="border-l-2 border-l-rose-400 " onClick={() => deleting()}>
        <DeleteForeverRoundedIcon />
      </div>
    </div>
  );
}

export default CartList;
