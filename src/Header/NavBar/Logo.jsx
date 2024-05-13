function Logo() {
  return (
    <>
      <div className=" bg-[#fafafa]  w-full h-auto flex flex-wrap md:inline-flex shrink items-center justify-between ">
        <div>
          <h2 className=" text-3xl font-mono">Fresh Flower Direct</h2>
        </div>
        <div>
          <input
            className="h-[50px]  w-[300px]"
            type="text"
            placeholder=" &#128270; Search Entire Store Here"
          ></input>
        </div>
        <div className="flex flex-wrap">
          <button className="  border-x-2 hover:cursor-pointer hover:bg-slate-500 px-[15px] items-center ">
            Shop <br />
            <span className=" font-semibold text-xl">Flower</span>
          </button>
          <button className="border-x-2 hover:cursor-pointer hover:bg-slate-500 px-[15px] items-center ">
            Shop
            <br /> <span className=" font-semibold  text-xl">Plants</span>
          </button>
          <button className="border-x-2 hover:cursor-pointer hover:bg-slate-500 px-[15px] items-center ">
            Shop <br />
            <span className=" font-semibold text-xl">SUNDRY</span>
          </button>
        </div>
        {/* shop All Button */}
        <button className=" text-3xl py-2 bg-[#f5857a]  rounded-md font-semibold text-white  px-6">
          Shop All
        </button>
        <div className=" border-stone-600 border-1 pr-10">
          <button className="hover:bg-slate-400">
            Login <span>|</span>
          </button>
          <button className="hover:bg-slate-400">SignUp</button>
        </div>
      </div>
    </>
  );
}

export default Logo;
