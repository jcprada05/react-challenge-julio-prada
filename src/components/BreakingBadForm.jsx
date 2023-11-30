import './BreakingBadForm.css';

function BreakingBadForm() {
  return (
    <>
      <div className="main-div">
        <div>
          <p>Breaking</p>
          <p>Bad</p>
        </div>
        <div>
          <div>
            <p>First Name</p>
            <input placeholder="Breaking" />
          </div>
          <div>
            <p>Last Name</p>
            <input placeholder="Bad" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BreakingBadForm;
