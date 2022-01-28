import { useState } from "react";
import HeaderLeft from "../Home/HeaderLeft";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Shoes() {
  const shoeList = [
    {
      id: 1,
      img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e4182f87-d936-4052-a14a-b3c8bd161a38/air-max-90-shoes-BMS2dT.png",
      desc: "Women's Shoes",
      name: "Nike Air Max 90",
      price: 124.99,
    },
    {
      id: 2,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a86eed38-25b0-4ab0-acfe-1eb355b449e4/air-max-pre-day-shoes-gmmQLc.png",
      desc: "Women's Shoes",
      name: "Nike Air Max Pre-Day",
      price: 124.99,
    },
    {
      id: 3,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6b60691a-9b36-4fe1-ac0f-d5ea628a5906/air-max-90-shoes-nZrKJ5.png",
      desc: "Women's Shoes",
      name: "Air Max 90 Premium",
      price: 124.99,
    },
    {
      id: 4,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e7ea102-9732-484b-b19f-18f245189de1/air-max-90-se-shoes-LsgRxx.png",
      desc: "Women's Shoes",
      name: "Nike Air Max SE",
      price: 124.99,
    },
    {
      id: 5,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/183653ea-35d1-4022-b895-03642a022779/air-max-90-g-golf-shoe-qlD3wL.png",
      desc: "Women's Shoes",
      name: "Nike Air Max G",
      price: 124.99,
    },
    {
      id: 6,
      img: "https://c.static-nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/i1-9828c436-cbb4-40d9-8183-7064edee7ed7/womens-air-max-verona-guava-ice-release-date.jpg",
      desc: "Women's Shoes",
      name: "Nike Air Max Veron",
      price: 124.99,
    },
  ];

  let [value, setValue] = useState(0);
  const [total, setTotal] = useState(0);
  const [clickedIndex, setClickedIndex] = useState({});

  const handleClick = (index) => () => {
    setClickedIndex((state) => ({
      ...state, // <-- copy previous state
      [index]: !state[index], // <-- update value by index key
    }));
  };

  return (
    <div>
      <div className=" flex ">
        <HeaderLeft />
        <div className="overflow-auto h-screen bg-pink-50 flex flex-1 flex-wrap justify-around">
          <h2 className="sticky block bg-pink-100 text-center drop-shadow-xl z-10 top-0 left-0 w-full font-bold text-3xl">
            SHOES
          </h2>

          {shoeList.map(({ img, desc, name, price }, index) => (
            <div>
              <div className="w-[320px] h-[510px] drop-shadow-xl bg-pink-100 mb-4 mt-8 rounded-lg ">
                <img
                  src={img}
                  alt=""
                  className="cursor-pointer w-80 h-[400px]"
                />
                <div className="relative overflow-hidden">
                  <div className="pl-3 flex justify-around">
                    <div>
                      <h4>{name}</h4>
                      <p className="opacity-60 text-sm">{desc}</p>
                      <p className="opacity-60 text-sm">1 colour</p>
                    </div>

                    <h5 className="mt-4 ">${price}</h5>
                  </div>
                  <div
                    onClick={handleClick(index)}
                    className="hover:bg-pink-300 cursor-pointer bg-pink-200 w-full h-[50px] flex justify-center items-center rounded-br-lg border-t-2 border-slate-800"
                  >
                    <ShoppingBasketIcon />
                  </div>
                </div>
              </div>
              {/* item range */}
              {clickedIndex[index] ? (
                <div className="flex justify-between bg-white border-solid">
                  <div
                    onClick={() => setClickedIndex({})}
                    className="flex items-center px-5 bg-pink-500 rounded-bl-md drop-shadow-lg hover:bg-pink-400 cursor-pointer"
                  >
                    <h5 className="text-center ">
                      Go <br /> Back
                    </h5>
                  </div>
                  {/* total item */}
                  <div className="flex flex-col py-2 gap-2 items-center">
                    <div className="flex justify-center">
                      <div
                        onClick={() => {
                          if (value <= 0) return;
                          setValue((value -= 1));
                          setTotal((value * price).toFixed(2));
                        }}
                        className="p2 bg-pink-300 hover:bg-pink-400 cursor-pointer"
                      >
                        <ArrowLeftIcon />
                      </div>
                      <div className="bg-white px-3">{value}</div>
                      <div
                        onClick={() => {
                          setValue((value += 1));
                          setTotal((value * price).toFixed(2));
                        }}
                        className="p2 bg-pink-300 hover:bg-pink-400 cursor-pointer"
                      >
                        <ArrowRightIcon />
                      </div>
                    </div>
                    {/* total price */}
                    <div className="">
                      <div className="">$ {total}</div>
                    </div>
                  </div>
                  {/* add cart btn  */}
                  <div
                    onClick={() => {
                      console.log(index);
                      console.log(value);
                      console.log(clickedIndex);

                      addDoc(collection(db, "cartData"), {
                        img,
                        name,
                        quantity: { value },
                        price,
                        total,
                      });
                    }}
                    className="flex items-center px-5 bg-pink-500 rounded-br-md drop-shadow-lg hover:bg-pink-400 cursor-pointer"
                  >
                    <h5 className="text-center ">
                      Add to <br /> Cart
                    </h5>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shoes;
