import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Shoe() {
  return (
    <div className="w-[320px] h-[510px] drop-shadow-xl bg-pink-100 mb-4 mt-8 rounded-lg ">
      <img
        src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e4182f87-d936-4052-a14a-b3c8bd161a38/air-max-90-shoes-BMS2dT.png"
        alt=""
        className="cursor-pointer"
      />
      <div className="flex justify-between items-center">
        <div className="pl-3">
          <h4>Nike Air Max 90</h4>
          <p className="opacity-60 text-sm">Women's Shoes</p>
          <p className="opacity-60 text-sm">1 Colour</p>

          <h5 className="mt-4">$124.99</h5>
        </div>
        <div className="hover:bg-pink-300 cursor-pointer bg-pink-200 w-1/2 h-[110px] flex justify-center items-center rounded-br-lg">
          <ShoppingBasketIcon />
        </div>
      </div>
    </div>
  );
}

export default Shoe;
