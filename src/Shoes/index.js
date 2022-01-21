import HeaderLeft from "../Home/HeaderLeft";
import Shoe from "./Shoe";

function Shoes() {
  return (
    <div>
      <div className=" flex ">
        <HeaderLeft />
        <div className="overflow-auto h-screen bg-pink-50 flex flex-1 flex-wrap justify-around">
          <h2 className="sticky block bg-pink-100 text-center drop-shadow-xl z-10 top-0 left-0 w-full font-bold text-3xl">
            SHOES
          </h2>
          <Shoe />
          <Shoe />
          <Shoe />
          <Shoe />
          <Shoe />
          <Shoe />
        </div>
      </div>
    </div>
  );
}

export default Shoes;
