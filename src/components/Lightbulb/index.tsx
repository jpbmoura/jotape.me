const Lightbulb = () => {
  return (
    <div className="animate-swing absolute left-20 top-0 hidden  h-[500px] w-[200px] origin-top sm:block ">
      <div className="relative left-[96px] h-[200px] w-[4px] bg-black"></div>
      <div className="relative left-[90px] z-20 flex h-[20px] w-[16px] flex-col justify-between bg-gray-400">
        <div className="r-[1px] relative h-[4px] w-[16px] bg-gray-600"></div>
        <div className="r-[1px] relative h-[4px] w-[16px] bg-gray-600"></div>
        <div className="r-[1px] relative h-[4px] w-[16px] bg-gray-600"></div>
      </div>
      <div className="shadow-lightBulb relative bottom-[2px] left-[78px] z-10 h-[40px] w-[40px] rounded-[50%] bg-[#EBC4A4] shadow-[#EBC4A4]">
        <div className="relative left-[13px] z-20 h-[6px] w-[14px] rounded-[5px] border-[0.5px] border-black bg-transparent"></div>
        <div className="relative left-[13px] top-[-2px] z-20 h-[6px] w-[14px] rounded-[5px] border-[0.5px] border-black bg-transparent"></div>
        <div className="relative left-[13px] top-[-4px] z-20 h-[6px] w-[14px] rounded-[5px] border-[0.5px] border-black bg-transparent"></div>
      </div>
    </div>
  );
};

export default Lightbulb;
