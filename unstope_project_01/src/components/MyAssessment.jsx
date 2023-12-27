import MathAssessment from "./MathAssessment";
import NewAssessment from "./NewAssessment";

const MyAssessment = () => {
  return (
    <div>
      <div className="py-4 px-8">My Assessment</div>
      <div className="flex justify-between px-8">
        <div>
          <NewAssessment />
        </div>
        <div>
          <MathAssessment />
        </div>
        <div>
          <MathAssessment />
        </div>
      </div>
    </div>
  );
};

export default MyAssessment;
