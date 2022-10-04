import { useEffect, useState } from "react";

export default function Cart() {
  const [showCart, setShowCart] = useState(false);
  const onClick = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <div onClick={onClick}>Cart</div>
      <div
        className={`bg-stripes-pink absolute right-0 top-0 z-10 h-screen w-72 translate-x-72 duration-700 ${
          showCart && "translate-x-0"
        }`}
      ></div>
      <div
        onClick={() => setShowCart(false)}
        className={`absolute top-0 left-0 h-screen w-full bg-black/70 ${
          showCart ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
}
