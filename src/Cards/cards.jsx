function Cards() {
  return (
    <>
      <div className=" justify-center  bg-slate-50 items-center my-2 ">
        <h2 className=" text-orange-500 text-xl text-center font-semibold">
          Fresh Flower direct
        </h2>
        <h2 className="text-black text-4xl font-semibold text-center">
          our assorament
        </h2>
      </div>

      <div className=" max-w-[1500px] h-[200px] mx-auto grid  bg-slate-50  lg:grid-cols-3 md:grid-cols-1 gap-7 px-[8px]">
        <div className=" text-center shadow-md">
          <img
            className="h-[300px] w-full object-cover"
            src="../../public/flowers.jpeg"
            alt="card Image"
          />
          <button className="border-2 px-3 mx-2 my-3 py-2">Fresh</button>
          <button className="border-2 px-3 mx-2 my-3 py-2"> Dried</button>
          <button className="border-2 px-3 mx-2 my-3 py-2">Local </button>
          <button className="border-2 px-3 mx-2 my-3 py-2">Imported</button>
        </div>
        <div className=" text-center shadow-md">
          <img
            className="h-[300px] w-full object-cover"
            src="../../public/plants2.jpeg"
            alt="card Image"
          />
          <button className="border-2 px-3 mx-2 my-3 py-2">Indoor</button>
          <button className="border-2 px-3 mx-2 my-3 py-2"> Gift</button>
          <button className="border-2 px-3 mx-2 my-3 py-2">
            Long Lasting{" "}
          </button>
        </div>
        <div className=" text-center shadow-md">
          <img
            className="h-[300px] w-full object-cover"
            src="../../public/sundries.jpeg"
            alt="card Image"
          />
          <button className="border-2 px-3 mx-2 my-3 py-2">Fresh</button>
          <button className="border-2 px-3 mx-2 my-3 py-2"> Foam</button>
          <button className="border-2 px-3 mx-2 my-3 py-2">vase </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
