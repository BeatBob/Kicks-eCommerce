import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

function Shoe({ img, name, desc, price }) {
  let [value, setValue] = useState(0);
  const [total, setTotal] = useState(0);
  const [dash, setDash] = useState("translate-x-80");

  const menuOpen = () => {
    setDash(dash === "translate-x-80" ? "animate-dash" : "translate-x-80");
  };

  const increment = () => {
    setValue((value += 1));
    setTotal((value * price).toFixed(2));
  };

  const decrement = () => {
    if (value <= 0) return;
    setValue((value -= 1));
    setTotal((value * price).toFixed(2));
  };

  return (
    <div className="w-[320px] h-[510px] drop-shadow-xl bg-pink-100 mb-4 mt-8 rounded-lg ">
      <img src={img} alt="" className="cursor-pointer w-80 h-[400px]" />
      <div className="relative flex justify-between items-center  overflow-hidden">
        <div className="pl-3">
          <h4>{name}</h4>
          <p className="opacity-60 text-sm">{desc}</p>
          <p className="opacity-60 text-sm">1 colour</p>

          <h5 className="mt-4">${price}</h5>
        </div>
        <div
          onClick={menuOpen}
          className="hover:bg-pink-300 cursor-pointer bg-pink-200 w-1/2 h-[110px] flex justify-center items-center rounded-br-lg"
        >
          <ShoppingBasketIcon />
        </div>
        {/* item range */}
        <div
          className={`${dash} absolute inset-0 flex justify-between bg-white `}
        >
          <div
            onClick={menuOpen}
            className="flex items-center bg-pink-500 rounded-bl-md drop-shadow-lg hover:bg-pink-400 cursor-pointer"
          >
            <DoubleArrowIcon />
          </div>
          {/* total item */}
          <div className="flex flex-col justify-center gap-4 items-center">
            <div className="flex justify-center">
              <div
                onClick={() => decrement()}
                className="p2 bg-pink-300 hover:bg-pink-400 cursor-pointer"
              >
                <ArrowLeftIcon />
              </div>
              <div className="bg-white px-3">{value}</div>
              <div
                onClick={() => increment()}
                className="p2 bg-pink-300 hover:bg-pink-400 cursor-pointer"
              >
                <ArrowRightIcon />
              </div>
            </div>
            {/* total price */}
            <div className="">
              <div className="">{total}</div>
            </div>
          </div>
          {/* add cart btn  */}
          <div className="flex items-center px-5 bg-pink-500 rounded-br-md drop-shadow-lg hover:bg-pink-400 cursor-pointer">
            <h5 className="text-center ">
              Add to <br /> Cart
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shoe;
