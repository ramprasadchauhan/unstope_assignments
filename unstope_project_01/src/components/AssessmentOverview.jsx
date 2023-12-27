import user from "../images/user.svg";
import language from "../images/language.svg";
import rounded from "../images/rounded.svg";
import equal from "../images/equal.png";
const AssessmentOverview = () => {
  return (
    <div>
      <div>
        <p className="text-lg py-4">Assessments Overview</p>
      </div>
      <div className="flex justify-between border border-gray-200 rounded-lg p-4">
        <div className="flex m-4">
          <div>
            <p>Total Assessment</p>
            <div className="flex">
              <div className="p-4 bg-slate-100 rounded-lg">
                <img className="w-4" src={equal} alt="equal" />
              </div>
              <p className="text-xl font-bold">34</p>
            </div>
          </div>
          <div className="mx-4">
            <div>
              <p>Candidates</p>
            </div>
            <div className="flex">
              <div className="px-4 mx-2 border rounded-lg bg-gray-200">
                <img className="w-4 py-4" src={user} alt="user" />
              </div>
              <div className="mx-2">
                <p className="text-lg">
                  11,145 <span className="text-sm text-green-900">+89</span>
                </p>
                <p>Total Candidate</p>
              </div>
              <div className="mx-2">
                <p className="text-lg">
                  1,14{" "}
                  <span style={{ color: "green" }} className="text-sm">
                    +89
                  </span>
                </p>
                <p>Who Attemped</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-lg">
            <p>Candidates Sourse</p>
          </div>
          <div className="flex mx-2">
            <div className="bg-blue-50 p-4 rounded-2xl">
              <img className="w-4" src={language} alt="icon" />
            </div>
            <div className="mx-2">
              <p className="text-lg">
                11000
                <span style={{ color: "green" }} className="text-sm">
                  +89
                </span>
              </p>
              <p>Email</p>
            </div>
            <div className="mx-2">
              <p className="text-lg">
                145{" "}
                <span style={{ color: "green" }} className="text-sm">
                  +89
                </span>
              </p>
              <p>Social Share</p>
            </div>
            <div className="mx-2">
              <p className="text-lg">
                145
                <span style={{ color: "green" }} className="text-sm">
                  +89
                </span>
              </p>
              <p>Unique Link</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>Total Purpose</p>
          </div>
          <div className="flex">
            <div className=" bg-slate-100 p-4 rounded-lg">
              <img className="w-4" src={rounded} alt="rounded" />
            </div>
            <div>
              <p className="text-lg font-bold">11</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentOverview;
