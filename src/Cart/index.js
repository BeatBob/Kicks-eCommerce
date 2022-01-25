import CartList from "./CartList";

function Cart() {
  return (
    <div class="container mx-auto mt-10">
      <div class="flex shadow-2xl my-10">
        <div class="w-3/4 h-[640px] bg-white px-10 py-10 ">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Shopping Cart</h1>
            <h2 class="font-semibold text-2xl">3 Items</h2>
          </div>

          <div class="grid grid-cols-[300px_300px] mt-10 mb-5">
            <div className="flex justify-center items-center">
              <h3 class="font-semibold  text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
            </div>
            <div className="flex justify-between">
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase pl-4">
                Quantity
              </h3>
              <h3 class="font-semibold  text-gray-600 text-xs uppercase text-center">
                Price
              </h3>
              <h3 class="font-semibold  text-gray-600 text-xs uppercase text-center">
                Total
              </h3>
            </div>
          </div>

          <div className="overflow-y-auto overflow-x-hidden h-[70%]">
            <CartList />
            <CartList />
            <CartList />
            <CartList />
            <CartList />
            <CartList />
            <CartList />
          </div>
        </div>

        {/* right */}
        <div id="summary" class="w-1/4 px-8 py-10">
          <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">Items 3</span>
            <span class="font-semibold text-sm">590$</span>
          </div>
          <div>
            <label class="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select class="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div class="py-10">
            <label
              for="promo"
              class="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              class="p-2 text-sm w-full"
            />
          </div>
          <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div class="border-t mt-8">
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>$600</span>
            </div>
            <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
