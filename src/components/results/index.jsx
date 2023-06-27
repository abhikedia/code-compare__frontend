import "./index.scss";

function convertTimeOutput(output) {
  // Remove any leading/trailing spaces and replace multiple spaces with a single space
  output = output.trim().replace(/\s+/g, ' ');

  // Replace spaces before and after 'm' and 's' with a newline character
  output = output.replace(/(\d)m\s/g, '$1m\n').replace(/(\d)s\s/g, '$1s\n');

  // Replace the separator (*) with a newline character
  output = output.replace(/\* /g, '');

  return output;
}

const Results = ({ result1, result2 }) => {
  return (
    <div id="results">
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
    </div>
  );
};

export default Results;
