import React from "react";
import "./index.scss";

const Results = ({ result1, result2 }) => {
  return (
    <div id="results">
      {result1.hasOwnProperty("output") && result2.hasOwnProperty("output") ? (
        <>
          <div className="result_">
            <span className="bold">Code 1</span>
            <pre>{result1.output}</pre>
            <br />
            <span className="bold">Time</span>
            <pre>{result1.time}</pre>
          </div>
          <div className="result_">
            <span className="bold">Code 2</span>
            <pre>{result2.output}</pre>
            <br />
            <span className="bold">Time</span>
            <pre>{result2.time}</pre>
          </div>
        </>
      ) : (
        <div>Submit code to see the results</div>
      )}
    </div>
  );
};

export default Results;
