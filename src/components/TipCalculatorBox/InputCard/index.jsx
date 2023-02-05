import { useState } from "react";
import IconDollar from "../../../assets/images/icon-dollar.svg";
import IconPerson from "../../../assets/images/icon-person.svg";

const commonTips = ["5%", "10%", "15%", "25%", "50%"];

export default function InputCard({ setBill, setTip, setPerson }) {
  const [InputError, setInputError] = useState(false);

  const getTip = (e) => {
    let value = e.target.value.split("%");
    setTip(value[0]);
  };

  const personValidation = (e) => {
    let value = Number(e.target.value);
    if (value === "" || value === 0) {
      setInputError(true);
      setPerson(value);
    } else {
      setPerson(value);
      setInputError(false);
      e.target.parentElement.classList.add("focus-style");
    }
  };

  return (
    <div className="TipInputCard">
      <div className="bill-input-wrapper">
        <label htmlFor="BillInputController">Bill</label>
        <div
          className="input-box"
          onFocus={(e) => {
            e.currentTarget.classList.add("focus-style");
          }}
          onBlur={(e) => {
            e.currentTarget.classList.remove("focus-style");
          }}
        >
          <img src={IconDollar} alt="icon-dollar" />
          <input
            type="number"
            id="BillInputController"
            placeholder="0"
            onChange={(e) => setBill(e.target.value)}
          />
        </div>
      </div>
      <div className="tip-select-wrapper">
        <span>Select Tip %</span>
        <div className="tip-select-items">
          {commonTips.map((tip, i) => (
            <input
              key={i}
              type="button"
              value={tip}
              onClick={(e) => getTip(e)}
            />
          ))}
          <input
            type="number"
            placeholder="Custom"
            onChange={(e) => getTip(e)}
          />
        </div>
      </div>
      <div className="person-input-wrapper">
        <label htmlFor="PersonInputController">Number of People</label>
        <span
          className={
            InputError ? "person-input-error isVisible" : "person-input-error"
          }
        >
          Can't be zero
        </span>
        <div
          className={InputError ? "input-box error-style" : "input-box"}
          onFocus={(e) => {
            e.currentTarget.classList.add("focus-style");
          }}
          onBlur={(e) => {
            e.currentTarget.classList.remove("focus-style");
          }}
        >
          <img src={IconPerson} alt="icon-person" />
          <input
            type="number"
            id="PersonInputController"
            placeholder="0"
            onChange={(e) => personValidation(e)}
            onBlur={(e) => personValidation(e)}
          />
        </div>
      </div>
    </div>
  );
}
