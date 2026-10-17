import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import Search from "./components/Search";
import Records from "./components/Records";
import medical_records from "./medicalRecords";

const title = "Patient Medical Records";

const App = () => {
  const [startedSearch, setStartedSearch] = useState(false);
  const [records, setRecords] = useState();
  const [id, setId] = useState();

  setRecords(medical_records);

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="content">
        {
          <Search
            setRecords={setRecords}
            records={records}
            setId={id}
            id={id}
            setStartedSearch={setStartedSearch}
            startedSearch={startedSearch}
          />
        }
        {startedSearch && <Records records={records} />}
      </div>
    </div>
  );
};

export default App;
