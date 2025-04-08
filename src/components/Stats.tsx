const Stats = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="grid grid-cols-3 grid-rows-2 gap-5 w-full h-full p-20 ">
      <div className="shadow-2xl col-start-1 row-span-2 rounded-s-xl" dir="ltr">
        <div className="w-full h-full bg-white rounded-s-xl"></div>
      </div>
      <div className="shadow-2xl col-start-2 row-span-1">
        {" "}
        <div className="w-full h-full bg-white"></div>
      </div>
      <div className="shadow-2xl col-start-2 row-start-2 row-span-1">
        {" "}
        <div className="w-full h-full bg-white"></div>
      </div>
      <div className="shadow-2xl col-start-3 row-span-2 rounded-s-xl" dir="rtl">
        {" "}
        <div className="w-full h-full bg-white rounded-s-xl"></div>
      </div>
    </div>
  </div>
);

export default Stats;
