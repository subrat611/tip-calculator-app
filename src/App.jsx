import TitleLogo from "./assets/images/logo.svg";

import TipCalculatorBox from "./components/TipCalculatorBox";

function App() {
  return (
    <div className="App">
      <div>
        <img src={TitleLogo} alt="logo" />
      </div>
      <TipCalculatorBox />
    </div>
  );
}

export default App;
