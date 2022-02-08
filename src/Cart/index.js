import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import CartList from "./CartList";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function Cart() {
  const navigate = useNavigate();
  const [getItem, setGetItem] = useState([]);
  const docData = async () => {
    const querySnapshot = await getDocs(collection(db, "cartData"));
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    setGetItem(data);
  };

  useEffect(() => {
    docData();
  });

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-2xl my-10">
        <div className="w-3/4 h-[640px] bg-white px-10 py-10 ">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">
              {getItem.reduce(
                (previousValue, currentValue) =>
                  previousValue + currentValue.quantity.value,
                0
              )}{" "}
              Items
            </h2>
          </div>

          <div className="flex mt-10 mb-5 ">
            <div className="w-2/5 pl-16">
              <h3 className="font-semibold  text-gray-600 text-xs uppercase ">
                Product Details
              </h3>
            </div>
            <div className="flex justify-around w-3/5 pr-12">
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase pl-4">
                Quantity
              </h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase text-center">
                Price
              </h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase text-center">
                Total
              </h3>
            </div>
          </div>

          <div className="overflow-y-auto overflow-x-hidden h-[70%] shadow-xl">
            {getItem?.map(({ img, desc, name, price, quantity, total, id }) => (
              <CartList
                key={id}
                id={id}
                img={img}
                desc={desc}
                name={name}
                price={price}
                quantity={quantity.value}
                total={total}
              />
            ))}
          </div>
          <div
            className="font-bold text-xl text-gray-700 block  w-52 text-center
    py-2 transition duration-200 ease-in-out cursor-pointer bg-rose-300 hover:text-2xl"
          >
            <button onClick={() => navigate(-1)}>
              <KeyboardArrowLeftIcon />
              Go Back?
            </button>
          </div>
        </div>

        {/* right */}
        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Items{" "}
              {getItem.reduce(
                (previousValue, currentValue) =>
                  previousValue + currentValue.quantity.value,
                0
              )}{" "}
            </span>
            <span className="font-semibold text-sm"></span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Free Shipping</option>
            </select>
          </div>
          <div className="py-10">
            <label className="font-semibold inline-block mb-3 text-sm uppercase">
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>
                {getItem
                  .reduce(
                    (previousValue, currentValue) =>
                      previousValue + Number(currentValue.total),
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
