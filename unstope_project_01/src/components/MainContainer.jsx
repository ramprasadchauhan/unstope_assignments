import AssessmentOverview from "./AssessmentOverview";
import MainHeader from "./MainHeader";
import MyAssessment from "./MyAssessment";

const MainContainer = () => {
  return (
    <div className="w-11/12">
      <MainHeader />
      <AssessmentOverview />
      <MyAssessment />
    </div>
  );
};

export default MainContainer;
