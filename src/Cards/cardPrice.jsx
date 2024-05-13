function CardPrice() {
  const data = [
    {
      imageSrc: "../../public/redRose.jpeg",
      Price: 20 + "$",
      tag: "Love Blooms",
    },
    {
      imageSrc1: "../../public/plants2.jpeg",
      Price1: 20 + "$",
      tag1: "Floral Ebrace",
    },
    {
      imageSrc2: "../../public/photo3.jpeg",
      Price2: 20 + "$",
      tag2: "Expression Of Pink",
    },
    {
      imageSrc3: "../../public/sundries.jpeg",
      Price3: 20 + "$",
      tag3: "Floral Treasure",
    },
  ];
  const { imageSrc, Price, tag } = data[0];
  const { imageSrc1, Price1, tag1 } = data[1];
  const { imageSrc2, Price2, tag2 } = data[2];
  const { imageSrc3, Price3, tag3 } = data[3];
  return (
    <>
      <div className="mx-[80px] h-[200px] max-w-[1320] mb-[800px]  grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:pt-[15%] md:pt-[130%] pt-[1000px]">
        <div>
          <img
            className="hover:opacity-50 hover:scale-105 lg:h-[480px] md:h-[480px] sm:h-[480px] overflow-hidden"
            src={imageSrc}
          ></img>
          <div className="flex flex-wrap justify-between mt-5">
            <h2 className="text-2xl font-semibold">{tag}</h2>
            <h3 className=" text-[#48ac8e] text-3xl mr-8 font-mono font-semibold">
              {Price}
            </h3>
          </div>
        </div>
        <div>
          <img
            className="hover:opacity-50 hover:scale-105  overflow-hidden"
            src={imageSrc1}
          ></img>
          <div className="flex flex-wrap mt-5 justify-between ">
            <h2 className="text-2xl font-semibold">{tag1}</h2>
            <h3 className=" text-[#48ac8e] text-3xl font-mono font-semibold">
              {Price1}
            </h3>
          </div>
        </div>
        <div>
          <img
            className="hover:opacity-50 hover:scale-105  overflow-hidden"
            src={imageSrc2}
          ></img>
          <div className="flex flex-wrap mt-5 justify-between ">
            <h2 className="text-2xl font-semibold">{tag2}</h2>
            <h3 className=" text-[#48ac8e] text-3xl font-mono font-semibold">
              {Price2}
            </h3>
          </div>
        </div>
        <div>
          <img
            src={imageSrc3}
            className="hover:opacity-50 hover:scale-105  overflow-hidden"
          ></img>
          <div className="flex flex-wrap mt-5 justify-between ">
            <h2 className="text-2xl font-semibold">{tag3}</h2>
            <h3 className=" text-[#48ac8e] text-3xl font-mono font-semibold">
              {Price3}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPrice;
