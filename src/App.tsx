import { Outlet } from "react-router-dom";
import "./App.css";
import NavigationComponent from "./component/NavigationComponent";

/**
 * App component hosting all other screen using the react router.
 */
function App() {
  return (
    <div className="">
      <NavigationComponent />
      <Outlet />
    </div>
  );
}

export default App;
