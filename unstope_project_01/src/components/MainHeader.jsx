import mobile_icon from "../images/mobile_icon.svg";

const MainHeader = () => {
  return (
    <div>
      <div className="flex justify-between py-4">
        <div className="flex flex-row gap-4 text-lg">
          <p className="divide-x-2">Assessment</p>
          <p>My Assessments</p>
        </div>
        <div className="px-8">
          <img className="w-6 font-bold" src={mobile_icon} alt="mobile_icon" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default MainHeader;
