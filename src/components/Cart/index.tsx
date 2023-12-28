
// Cart component
import { CartItem } from "../../types/Cart";

export default function Cart({cartItems}:{cartItems: CartItem[]}) {
  return (
    <>
      <div className="absolute top-20 end-0 md:end-5 2xl:end-[5%] bg-white mr-3 rounded-lg shadow-xl">
        <div className="flex relative flex-col w-[360px]">
          <h3 className="w-full p-6 border-b-[1px]">Cart</h3>
            {cartItems.length === 0 ? (
              <div className="w-full min-h-[200px] flex justify-center items-center">Your cart is empty.</div>
            ):(
              cartItems.map((item) => (
                <div>
                  <p>{item.productId}</p> 
                </div>
              ))
            )}
        </div>
      </div>
    </>
  );
}
