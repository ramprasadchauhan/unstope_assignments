import assessment from "../images/assessment.svg";
import three_dots from "../images/three-dots.svg";
import calender from "../images/calendar.svg";

const MathAssessment = () => {
  return (
    <div className="w-80 bg-slate-200 border border-slate-200 rounded-lg p-2">
      <div className="flex justify-between">
        <img className="w-4" src={assessment} alt="assments" />
        <img className="w-4" src={three_dots} alt="three-dots" />
      </div>
      <div>
        <p className="text-lg mt-3">Math Assessment</p>
      </div>
      <div className="flex">
        <p className="font-bold">Job</p>
        <img className="ml-4 mr-2 w-4" src={calender} alt="calender" />
        <p>20 Apr 2023</p>
        <hr />
      </div>
      <div className="flex justify-between mt-8">
        <div className="flex gap-2">
          <div>
            <p>00</p>
            <p>Duration</p>
          </div>
          <div>
            <p>00</p>
            <p>Question</p>
          </div>
        </div>
        <div className="flex">
          <p className="text-center w-20 h-8 rounded-2xl border border-black px-4">
            Share
          </p>
          <p className="bg-blue-600 text-white text-center w-8 h-8 border rounded-full ml-2">
            LP
          </p>
        </div>
      </div>
    </div>
  );
};

export default MathAssessment;
