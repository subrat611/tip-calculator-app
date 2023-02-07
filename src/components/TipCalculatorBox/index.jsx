import { useEffect, useState } from "react";
import InputCard from "./InputCard";
import OutputCard from "./OutputCard";

export default function TipCalculatorBox() {
  const [inputBill, setInputBill] = useState("");
  const [inputTip, setInputTip] = useState("");
  const [inputCustomTip, setInputCustomTip] = useState("");
  const [inputPerson, setInputPerson] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [activeBtn, setActiveBtn] = useState(null);

  useEffect(() => {
    tipCalculate();
  }, [inputTip, inputPerson, inputCustomTip]);

  const resetAll = () => {
    setInputBill("");
    setInputTip("");
    setInputCustomTip("");
    setInputPerson("");
    setTipAmount(0);
    setActiveBtn(null);
  };

  const tipCalculate = () => {
    // calculate the tip % per person
    // formula = bill * (% of tip in decimal) / no of person
    let tipPerPerson = (inputBill * (inputTip / 100)) / inputPerson;
    setTipAmount(tipPerPerson.toFixed(2));

    // calculate the total per person
    // formula = bill * (1 + % of tip in decimal) / no of person
    let total = (inputBill * (1 + inputTip / 100)) / inputPerson;
    setTotal(total.toFixed(2));
  };

  return (
    <div className="TipCalcBox">
      <InputCard
        bill={inputBill}
        tipValue={inputTip}
        customTip={inputCustomTip}
        person={inputPerson}
        activeBtn={activeBtn}
        setBill={setInputBill}
        setTip={setInputTip}
        setCustomTip={setInputCustomTip}
        setPerson={setInputPerson}
        setActiveBtn={setActiveBtn}
      />
      <OutputCard
        perPersonTip={tipAmount}
        perPersonTotal={total}
        reset={resetAll}
      />
    </div>
  );
}
