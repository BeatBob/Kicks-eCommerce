import HeaderLeft from "../Home/HeaderLeft";
import Bag from "./Bag";

function index() {
  return (
    <div>
      <div className=" flex ">
        <HeaderLeft />
        <div className="overflow-auto h-screen bg-pink-50 flex flex-1 flex-wrap justify-around">
          <h2 className="sticky block bg-pink-100 text-center drop-shadow-xl z-10 top-0 left-0 w-full font-bold text-3xl">
            BAGS
          </h2>
          <Bag
            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3ab9d113-a1fe-49d6-a1c1-e268e772335d/heritage-crossbody-bag-Qf2sqq.png"
            name="Nike Heritage (Small, 1L)"
            desc="Crossbody Bag"
            colour="1 colour"
            price="$18.49"
          />
          <Bag
            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9fde52d6-5827-43df-b5ad-f5ee452626c3/sportswear-futura-luxe-tote-JKBBdX.png"
            name="Nike Futura Luxe"
            desc="Women Tote (10L)"
            price="$64.49"
          />
          <Bag
            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d505ecff-0327-4670-9931-6e6a66ce729d/heritage-backpack-4dX7J5.png"
            name="Nike Heritage (25L)"
            desc="Backpack"
            price="$39.99"
          />
          <Bag
            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9d02587c-7e5f-49df-ab7c-49556f317325/heritage-eugene-backpack-GhRMf7.png"
            name="Nike Heritage (23L)"
            desc="Eugene Backpack"
            price="$39.99"
          />
          <Bag
            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e25c80a7-68aa-4dfd-ba10-83191700423b/sportswear-futura-365-mini-backpack-mVR6Fs.png"
            name="Nike Futura 365"
            desc="Mini Backpack (6L)"
            price="$27.49"
          />
          <Bag
            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0610dfec-6e69-4ed7-a1ee-e325c134fc26/sportswear-futura-365-mini-backpack-nc3WGm.png"
            name="Nike Futura 365"
            desc="Mini Backpack (6L)"
            price="$27.49"
          />
        </div>
      </div>
    </div>
  );
}

export default index;
