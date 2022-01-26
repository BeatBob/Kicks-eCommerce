import HeaderLeft from "../Home/HeaderLeft";
import Shoe from "./Shoe";

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

  return (
    <div>
      <div className=" flex ">
        <HeaderLeft />
        <div className="overflow-auto h-screen bg-pink-50 flex flex-1 flex-wrap justify-around">
          <h2 className="sticky block bg-pink-100 text-center drop-shadow-xl z-10 top-0 left-0 w-full font-bold text-3xl">
            SHOES
          </h2>

          {shoeList.map(({ id, img, desc, name, price }) => (
            <div>
              <Shoe key={id} img={img} desc={desc} name={name} price={price} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shoes;
