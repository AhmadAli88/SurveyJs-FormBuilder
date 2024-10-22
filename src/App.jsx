import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SurveyComponent from "./components/SurveyComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Survey JS Integration with React</h1>
        <SurveyComponent />
      </div>
    </>
  );
}

export default App;
