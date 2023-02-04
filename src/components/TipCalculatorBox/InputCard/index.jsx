import IconDollar from "../../../assets/images/icon-dollar.svg";
import IconPerson from "../../../assets/images/icon-person.svg";

export default function InputCard() {
  return (
    <div className="TipInputCard">
      <div className="bill-input-wrapper">
        <label htmlFor="BillInputController">Bill</label>
        <div className="input-box">
          <img src={IconDollar} alt="icon-dollar" />
          <input type="number" id="BillInputController" placeholder="0" />
        </div>
      </div>
      <div className="tip-select-wrapper">
        <span>Select Tip %</span>
        <div className="tip-select-items">
          <input type="button" value="5%" />
          <input type="button" value="10%" />
          <input type="button" value="15%" />
          <input type="button" value="25%" />
          <input type="button" value="50%" />
          <input type="number" placeholder="Custom" />
        </div>
      </div>
      <div className="person-input-wrapper">
        <label htmlFor="PersonInputController">Number of People</label>
        <div className="input-box">
          <img src={IconPerson} alt="icon-person" />
          <input type="number" id="PersonInputController" placeholder="0" />
        </div>
      </div>
    </div>
  );
}
