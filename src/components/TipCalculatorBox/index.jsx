import { useState } from "react";
import InputCard from "./InputCard";
import OutputCard from "./OutputCard";

export default function TipCalculatorBox() {
  const [inputBill, setInputBill] = useState(null);
  const [inputTip, setInputTip] = useState(null);
  const [inputPerson, setInputPerson] = useState(null);

  return (
    <div className="TipCalcBox">
      <InputCard
        setBill={setInputBill}
        setTip={setInputTip}
        setPerson={setInputPerson}
      />
      <OutputCard />
    </div>
  );
}
