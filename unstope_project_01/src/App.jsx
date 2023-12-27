import MainContainer from "./components/MainContainer";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default App;
