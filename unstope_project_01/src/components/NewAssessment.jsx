import plus_icon from "../images/blue-plus.svg";
const NewAssessment = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center w-80 bg-slate-200 rounded-lg p-2">
      <div className="flex items-center justify-center w-12 h-12 bg-white mt-4 rounded-full">
        <img className="w-4" src={plus_icon} alt="plus_icon" />
      </div>

      <div className="text-lg">
        <p>New Assessment</p>
      </div>
      <div>
        <p>
          From here you can add question of multiple types like MCQs, Subjective
          (text or paragraph)!
        </p>
      </div>
    </div>
  );
};

export default NewAssessment;
