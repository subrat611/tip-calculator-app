export default function OutputCard({ perPersonTip, perPersonTotal, reset }) {
  return (
    <div className="TipOutputCard">
      <div>
        <div className="tip-amount">
          <div>
            <span>Tip Amount</span>
            <br />
            <span>/ person</span>
          </div>
          {perPersonTip !== "Infinity" && perPersonTip >= 0 ? (
            <p>${perPersonTip}</p>
          ) : (
            <p>$0.00</p>
          )}
        </div>
        <div className="tip-total">
          <div>
            <span>Total</span>
            <br />
            <span>/ person</span>
          </div>
          {perPersonTotal !== "Infinity" && perPersonTotal >= 0 ? (
            <p>${perPersonTotal}</p>
          ) : (
            <p>$0.00</p>
          )}
        </div>
      </div>
      {perPersonTip !== "Infinity" && perPersonTip !== "NaN" ? (
        <button type="button" className="reset-btn" onClick={() => reset()}>
          Reset
        </button>
      ) : (
        <button type="button" className="reset-btn disabled">
          Reset
        </button>
      )}
    </div>
  );
}
