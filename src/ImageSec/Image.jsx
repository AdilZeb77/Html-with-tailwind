function Image() {
  return (
    <div className="max-w-full  max-h-[500px] grid  lg:grid-cols-1 justify-center">
      <img
        className="object-cover w-full h-[300px] md:h-[500px]"
        src="../../public/image1.jpg"
      ></img>
    </div>
  );
}

export default Image;
