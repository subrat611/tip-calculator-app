import { useEffect, useState } from "react";
import InputCard from "./InputCard";
import OutputCard from "./OutputCard";

export default function TipCalculatorBox() {
  const [inputBill, setInputBill] = useState(0);
  const [inputTip, setInputTip] = useState(0);
  const [inputPerson, setInputPerson] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    tipCalculate();
  }, [inputTip, inputPerson]);

  const resetAll = () => {
    setInputBill(0);
    setInputTip(0);
    setInputPerson(0);
    setTipAmount(0);
  };

  const tipCalculate = () => {
    // calculate the tip % per person
    // formula = bill * (% of tip in decimal) / no of person
    let tipPerPerson = (inputBill * (inputTip / 100)) / inputPerson;
    setTipAmount(tipPerPerson.toFixed(2));

    // calculate the total per person
    // formula = bill * (1 + % of tip in decimal) / no of person
    let total = (inputBill * (1 + inputTip / 100)) / inputPerson;
    setTotal(total);
  };

  return (
    <div className="TipCalcBox">
      <InputCard
        setBill={setInputBill}
        setTip={setInputTip}
        setPerson={setInputPerson}
      />
      <OutputCard
        perPersonTip={tipAmount}
        perPersonTotal={total}
        reset={resetAll}
      />
    </div>
  );
}
