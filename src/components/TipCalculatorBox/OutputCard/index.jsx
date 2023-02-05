export default function OutputCard() {
  return (
    <div className="TipOutputCard">
      <div>
        <div className="tip-amount">
          <div>
            <span>Tip Amount</span>
            <br />
            <span>/ person</span>
          </div>
          <p>$0.00</p>
        </div>
        <div className="tip-total">
          <div>
            <span>Total</span>
            <br />
            <span>/ person</span>
          </div>
          <p>$0.00</p>
        </div>
      </div>
      <button type="button" className="reset-btn">
        Reset
      </button>
    </div>
  );
}
