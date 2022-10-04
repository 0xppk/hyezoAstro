import { useEffect, useState } from "react";

export default function Search() {
  const [showSearch, setShowSearch] = useState(false);
  const onClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <div onClick={onClick}>Search</div>
      <div
        className={`absolute left-0 top-0 z-10 flex h-24 w-screen -translate-y-32 place-items-center bg-blue-800 px-10 text-md duration-700 ${
          showSearch && "-translate-y-0"
        }`}
      >
        <input
          className="basis-11/12 bg-transparent focus:outline-0"
          placeholder="Search our store"
        />
        <small className="basis-1/12 text-right" onClick={() => setShowSearch(false)}>
          x
        </small>
      </div>
      <div
        onClick={() => setShowSearch(false)}
        className={`absolute left-0 top-0 h-screen w-screen bg-black/70 ${
          showSearch ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
}
