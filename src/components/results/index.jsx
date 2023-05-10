import "./index.scss";

const Results = ({ result1, result2 }) => {
  return (
    <div id="results">
      <div className="result_">
        <span className="bold">Code 1</span>
        {result1.output}
        <br />
        <br />
        <span className="bold">Time</span>
        {result1.time}
      </div>
      <div className="result_">
        <span className="bold">Code 2</span>
        {result2.output}
        <br />
        <br />
        <span className="bold">Time</span>
        {result2.time}
      </div>
    </div>
  );
};

export default Results;
