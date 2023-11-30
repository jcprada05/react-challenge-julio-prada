import { useState } from 'react';
import { periodicTableSymbols } from './PeriodicTableArray';
import './BreakingBadForm.css';

function BreakingBadForm() {
  const [firstNameWord, setFirstNameWord] = useState('Breaking');
  const [lastNameWord, setLastNameWord] = useState('Bad');
  const [firstNameInputValue, setFirstNameInputValue] = useState('');
  const [lastNameInputValue, setLastNameInputValue] = useState('');

  function InputValues() {
    if (firstNameInputValue && lastNameInputValue) {
      setFirstNameWord(firstNameInputValue);
      setLastNameWord(lastNameInputValue);
    } else {
      null;
    }
  }

  const firstNameApplyStyles = (firstNameWord, firstNameMatches) => {
    let firstNameResult = [];

    let i = 0;
    while (i < firstNameWord.length) {
      const firstNameMatch = firstNameMatches.find((firstNameSubstring) =>
        firstNameWord.startsWith(firstNameSubstring, i)
      );

      if (firstNameMatch) {
        firstNameResult.push(
          <span key={i} className="breakingBadStyle">
            {firstNameMatch}
          </span>
        );
        i += firstNameMatch.length;
      } else {
        firstNameResult.push(firstNameWord[i]);
        i++;
      }
    }

    return firstNameResult;
  };

  const firstNameResultWithStyles = firstNameApplyStyles(
    firstNameWord,
    periodicTableSymbols
  );

  const lastNameApplyStyles = (lastNameWord, lastNameMatches) => {
    let lastNameResult = [];

    let i = 0;
    while (i < lastNameWord.length) {
      const lastNameMatch = lastNameMatches.find((lastNameSubstring) =>
        lastNameWord.startsWith(lastNameSubstring, i)
      );

      if (lastNameMatch) {
        lastNameResult.push(
          <span key={i} className="breakingBadStyle">
            {lastNameMatch}
          </span>
        );
        i += lastNameMatch.length;
      } else {
        lastNameResult.push(lastNameWord[i]);
        i++;
      }
    }

    return lastNameResult;
  };

  const lastNameResultWithStyles = lastNameApplyStyles(
    lastNameWord,
    periodicTableSymbols
  );

  return (
    <>
      <div className="main-div">
        <div className="breaking-bad-div">
          <p className="breaking-p">{firstNameResultWithStyles}</p>
          <p className="bad-p">{lastNameResultWithStyles}</p>
        </div>
        <div className="inputs-div">
          <div className="inputs-div-fname">
            <p>First Name</p>
            <input
              placeholder="Breaking"
              className="inputs-div-input"
              onChange={(e) => setFirstNameInputValue(e.target.value)}
              maxLength={10}
              required
            />
          </div>
          <div className="inputs-div-lname">
            <p>Last Name</p>
            <input
              placeholder="Bad"
              className="inputs-div-input"
              onChange={(e) => setLastNameInputValue(e.target.value)}
              maxLength={10}
              required
            />
          </div>
        </div>
        <div className="button-div">
          <button className="breakify-button" onClick={InputValues}>
            Breakify
          </button>
        </div>
      </div>
    </>
  );
}

export default BreakingBadForm;
