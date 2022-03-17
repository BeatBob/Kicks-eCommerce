import React from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

function CartList({ img, desc, name, price, quantity, total, id }) {
  function deleting() {
    deleteDoc(doc(db, "cartData", id));
  }

  return (
    <div className="md:flex  items-center hover:bg-gray-100 px-2 py-5">
      <div className=" flex md:w-2/5">
        {/* image  */}
        <div className="w-20">
          <img className="h-24" src={img} alt="" />
        </div>
        {/* name & desc */}
        <div className="flex flex-col justify-around ml-4 flex-grow">
          <span className="font-bold text-sm">{name}</span>
          <span className="text-red-500 text-xs">{desc}</span>
        </div>
        {/* delete btn  */}
        <div
          className="flex items-center border-l-2 border-l-rose-400 cursor-pointer md:hidden"
          onClick={() => deleting()}
        >
          <DeleteForeverRoundedIcon />
        </div>
      </div>

      <p className="flex justify-around md:w-1/5">
        <span className="md:hidden">quantity :</span>
        {quantity}
      </p>
      <p className="flex justify-around text-center md:w-1/5 font-semibold text-sm  md:inline">
        <span className="md:hidden font-normal text-base">price :</span> ${" "}
        {price}
      </p>
      <p className="flex justify-around text-center md:w-1/5 font-semibold text-sm  md:inline">
        <span className="md:hidden font-normal text-base">total :</span> ${" "}
        {total}
      </p>

      {/* delete btn  */}
      <div
        className="cursor-pointer hidden md:block"
        onClick={() => deleting()}
      >
        <span className="border-l-2 border-l-rose-400"></span>{" "}
        <DeleteForeverRoundedIcon />
      </div>
    </div>
  );
}

export default CartList;
