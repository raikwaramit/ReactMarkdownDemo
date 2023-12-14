import { Outlet } from "react-router-dom";
import "./App.css";
import NavigationComponent from "./component/NavigationComponent";

/**
 * App component hosting all other screen using the react router.
 */
function App() {
  return (
    <div className="">
      <div className="">
        <NavigationComponent />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
