import { useState } from "react";
import Table from "./Table";

function Main() {
  const [toBeExchanged, setToBeExchanged] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLessThan, setIsLessThan] = useState(false);
  const [isExceed, setIsExceed] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;

    // check if empty
    if (value === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }

    // check if value is less than 0.01
    if (value < 0.01) {
      setIsLessThan(true);
    } else {
      setIsLessThan(false);
    }

    // check if value exceeds 17042.67
    if (value > 17042.67) {
      setIsExceed(true);
    } else {
      setIsExceed(false);
    }

    // check if value includes a decimal point
    if (value.match(/\./g)) {
      const [, decimal] = value.split(".");

      // restrict value to only 2 decimal places
      if (decimal?.length > 2) {
        // do nothing
        return;
      }
    }

    // otherwise, update value in state
    setToBeExchanged(value);
  };

  const handleBlur = (e) => {
    const num = parseFloat(e.target.value);
    if (!isNaN(num)) {
      // Formats to fixed 2 decimal places
      setToBeExchanged(num.toFixed(2));
    }
  };

  return (
    <div className="layout-column align-items-center mx-auto">
      <h1>CryptoRank Exchange</h1>
      <p>{toBeExchanged}</p>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
          <label>
            I want to exchange ${" "}
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-10"
              data-testid="amount-input"
              required
              type="number"
              step="0.01"
              value={toBeExchanged}
            />{" "}
            of my $<span>17042.67</span>:
          </label>
          {isEmpty && (
            <p
              data-testid="error"
              className="form-hint error-text mt-3 pl-0 ml-0"
            >
              {"Amount cannot be empty"}
            </p>
          )}
          {isLessThan && (
            <p
              data-testid="error"
              className="form-hint error-text mt-3 pl-0 ml-0"
            >
              {"Amount cannot be less than $0.01"}
            </p>
          )}
          {isExceed && (
            <p
              data-testid="error"
              className="form-hint error-text mt-3 pl-0 ml-0"
            >
              {"Amount cannot exceed the available balance"}
            </p>
          )}
        </div>
      </section>
      <Table toBeExchanged={toBeExchanged} isExceed={isExceed} />
    </div>
  );
}

export default Main;
