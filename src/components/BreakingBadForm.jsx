import './BreakingBadForm.css';

function BreakingBadForm() {
  return (
    <>
      <div className="main-div">
        <div className="breaking-bad-div">
          <p className="breaking-p">Breaking</p>
          <p className="bad-p">Bad</p>
        </div>
        <div className="inputs-div">
          <div className="inputs-div-fname">
            <p>First Name</p>
            <input placeholder="Breaking" className="inputs-div-input" />
          </div>
          <div className="inputs-div-lname">
            <p>Last Name</p>
            <input placeholder="Bad" className="inputs-div-input" />
          </div>
        </div>
        <div className="button-div">
          <button className="breakify-button">Breakify</button>
        </div>
      </div>
    </>
  );
}

export default BreakingBadForm;
