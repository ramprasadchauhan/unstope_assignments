// eslint-disable-next-line react/prop-types
const SidebarContainer = ({ data, icon }) => {
  return (
    <div className="w-24 h-20 px-2 my-2 flex flex-col rounded-xl bg-slate-100 items-center text-center hover:bg-blue-300 hover:border hover:border-blue-500 hover:cursor-pointer">
      <img className="w-8" src={icon} alt="icon" />
      <h4>{data} </h4>
    </div>
  );
};

export default SidebarContainer;
