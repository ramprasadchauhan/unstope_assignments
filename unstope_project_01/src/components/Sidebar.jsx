import Admin from "./Admin";
import SidebarContainer from "./SidebarContainer";
import dashboard from "../images/dashboard.svg";
import assessment from "../images/assessment.svg";
import library from "../images/library.svg";
import rounded from "../images/rounded.svg";

const Sidebar = () => {
  return (
    <div className="p-4">
      <SidebarContainer icon={dashboard} data={"Dashboard"} />
      <SidebarContainer icon={assessment} data={"Assessment"} />
      <SidebarContainer icon={library} data={"My Library"} />
      <Admin />
      <SidebarContainer icon={rounded} data={"Round\nStatus"} />
    </div>
  );
};

export default Sidebar;
