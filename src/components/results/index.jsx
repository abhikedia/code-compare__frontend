import React from "react";
import "./index.scss";

function convertTimeOutput(data) {
  const regex = /(\w+)\s(\d+m\d+\.\d+s)/g;
  let matches;
  let result = [];

  while ((matches = regex.exec(data)) !== null) {
    const text = matches[1];
    const value = matches[2];
    result.push(
      <React.Fragment key={text}>
        {text}: {value}
        <br />
      </React.Fragment>
    );
  }

  return result;
}

const Results = ({ result1, result2 }) => {
  return (
    <div id="results">
      {result1.hasOwnProperty("output") && result2.hasOwnProperty("output") ? (
        <>
          <div className="result_">
            <span className="bold">Code 1</span>
            {result1.output}
            <br />
            <br />
            <span className="bold">Time</span>
            {convertTimeOutput(result1.time)}
          </div>
          <div className="result_">
            <span className="bold">Code 2</span>
            {result2.output}
            <br />
            <br />
            <span className="bold">Time</span>
            {convertTimeOutput(result2.time)}
          </div>
        </>
      ) : (
        <div>Submit code to see the results</div>
      )}
    </div>
  );
};

export default Results;
