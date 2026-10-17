import React, { useState } from "react";

function Search({
  setRecords,
  records,
  setId,
  id,
  setStartedSearch,
  startedSearch,
}) {
  const [showError, setShowError] = useState(false);

  const [userChoice, setUserChoice] = useState();

  const userNames = records.map((group) => group.data[0].userName);
  console.log(userNames);

  function handleClick(e) {
    if (userChoice != undefined) {
      setStartedSearch(true);
    }

    console.log(userChoice);
    if (userChoice === undefined) {
      setShowError(true);
      console.log("alert got called");
    } else {
      setShowError(false);
    }
  }

  return (
    <>
      <div className="layout-row align-items-baseline select-form-container">
        <div className="select">
          <select
            onChange={(e) => setUserChoice(e.target.value)}
            data-testid="patient-name"
            defaultValue="0"
          >
            <option key={0} value="0" disabled>
              Select Patient
            </option>
            {userNames.map((i) => (
              <option
                key={userNames.indexOf(i) + 1}
                value={userNames.indexOf(i) + 1}
              >
                {i}
              </option>
            ))}
          </select>
        </div>

        <button onClick={handleClick} type="submit" data-testid="show">
          Show
        </button>
      </div>
      {showError && <p>Please select a patient name.</p>}
    </>
  );
}

export default Search;
