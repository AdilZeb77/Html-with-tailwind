import Logo from "./NavBar/Logo";

function Header() {
  return (
    <>
      <div className="w-full h-auto  bg-slate-900   flex items-center md:flex-wrap justify-between shadow-md z-0">
        <h4 className="text-white ml-2 py-auto md:text-[15px] text-[10px]">
          Pakistan<span>&rsquo;</span>s Largest Flower Market online is a live
          Market
        </h4>
        <div className="flex gap-3 pr-4 ">
          <h2 className="text-white md:text-[12px] text-[10px] pr-4">
            Always changing
            <br /> More to Explore
          </h2>
          <span className="p-2 pr-6 bg-orange-600 text-white tetx-xl hidden md:block">
            Comeback Daily
          </span>
        </div>
      </div>
      <Logo />
    </>
  );
}

export default Header;
