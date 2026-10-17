import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import Search from "./components/Search";
import Records from "./components/Records";
import medical_records from "./medicalRecords";

const title = "Patient Medical Records";

const App = () => {
  const data = medical_records;

  const [startedSearch, setStartedSearch] = useState(false);
  const [record, setRecord] = useState();
  const [id, setId] = useState();

  console.log(data);
  // setRecord(data);

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="content">
        {
          <Search
            setRecord={setRecord}
            record={record}
            setId={id}
            id={id}
            setStartedSearch={setStartedSearch}
            startedSearch={startedSearch}
          />
        }
        {startedSearch && <Records />}
      </div>
    </div>
  );
};

export default App;
