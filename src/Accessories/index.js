import HeaderLeft from "../Home/HeaderLeft";
import Item from "./Item";

function index() {
  return (
    <div className=" flex ">
      <HeaderLeft />
      <div className="overflow-auto h-screen bg-pink-50 flex flex-1 flex-wrap justify-around">
        <h2 className="sticky block bg-pink-100 text-center drop-shadow-xl z-10 top-0 left-0 w-full font-bold text-3xl">
          ACCESSORIES
        </h2>
        <Item
          img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/717db9dd-864c-498a-aef1-82d340e1fd47/dri-fit-aerobill-featherlight-perforated-running-cap-0sTv3T.png"
          desc="Running Cap"
          name="Nike Dri-FIT AeroBill"
          price="$20.99"
        />
        <Item
          img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/717db9dd-864c-498a-aef1-82d340e1fd47/dri-fit-aerobill-featherlight-perforated-running-cap-0sTv3T.png"
          desc="Running Cap"
          name="Nike Dri-FIT AeroBill"
          price="$20.99"
        />
        <Item
          img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/717db9dd-864c-498a-aef1-82d340e1fd47/dri-fit-aerobill-featherlight-perforated-running-cap-0sTv3T.png"
          desc="Running Cap"
          name="Nike Dri-FIT AeroBill"
          price="$20.99"
        />
        <Item
          img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/717db9dd-864c-498a-aef1-82d340e1fd47/dri-fit-aerobill-featherlight-perforated-running-cap-0sTv3T.png"
          desc="Running Cap"
          name="Nike Dri-FIT AeroBill"
          price="$20.99"
        />
        <Item
          img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/717db9dd-864c-498a-aef1-82d340e1fd47/dri-fit-aerobill-featherlight-perforated-running-cap-0sTv3T.png"
          desc="Running Cap"
          name="Nike Dri-FIT AeroBill"
          price="$20.99"
        />
        <Item
          img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/717db9dd-864c-498a-aef1-82d340e1fd47/dri-fit-aerobill-featherlight-perforated-running-cap-0sTv3T.png"
          desc="Running Cap"
          name="Nike Dri-FIT AeroBill"
          price="$20.99"
        />
      </div>
    </div>
  );
}

export default index;
