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
        className={`bg-stripes-pink absolute right-0 h-screen w-72 translate-x-72 duration-300 ${
          showCart && "translate-x-0"
        }`}
      ></div>
    </>
  );
}
