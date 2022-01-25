import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Item({ img, name, desc, price }) {
  return (
    <div className="w-[320px] h-[510px] drop-shadow-xl bg-pink-100 mb-4 mt-8 rounded-lg ">
      <img src={img} alt="" className="cursor-pointer w-80 h-[400px]" />
      <div className="flex justify-between items-center">
        <div className="pl-3">
          <h4>{name}</h4>
          <p className="opacity-60 text-sm">{desc}</p>
          <p className="opacity-60 text-sm">1 colour</p>

          <h5 className="mt-4">{price}</h5>
        </div>
        <div className="hover:bg-pink-300 cursor-pointer bg-pink-200 w-1/2 h-[110px] flex justify-center items-center rounded-br-lg">
          <ShoppingBasketIcon />
        </div>
      </div>
    </div>
  );
}

export default Item;
