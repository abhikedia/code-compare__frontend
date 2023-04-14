import React, { useState } from "react";

import "./index.scss";
import bufferToString from "../../utils/buffer-to-string";
import CodeEditor from "../code-editor";

const Homepage = () => {
  const [pythonCode, setPythonCode] = useState("");
  const [cppCode, setCppCode] = useState("");
  const [inputText, setInputText] = useState("");

  const handleFileSelect = (event, editorType) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const fileContent = reader.result;
      const selectedEditor =
        editorType === "python" ? setPythonCode : setCppCode;
      selectedEditor(fileContent);
    };
    reader.readAsText(file);
  };

  const handleCodeSubmit = async () => {
    const requestData = {
      code1: {
        language: "cpp",
        code: cppCode,
      },
      code2: {
        language: "cpp",
        code: pythonCode,
      },
      input: inputText,
    };

    try {
      const response = await fetch("http://localhost:4000/api/v1/code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const responseData = await response.json();

      const code1_time = bufferToString(responseData.data.code1.time);
      const code1_output = bufferToString(responseData.data.code1.output);
      const code2_time = bufferToString(responseData.data.code2.time);
      const code2_output = bufferToString(responseData.data.code2.output);
      console.log(code1_time, code1_output, code2_time, code2_output);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setInputText(event.target.value);
  };

  return (
    <div className="code-editor-container">
      <h1 className="header">CodeCompare</h1>
      <div className="code-editors-wrapper">
        <div className="code-editor">
          <select>
            <option value="cpp">C++</option>
            <option value="python">Python</option>
          </select>
          <CodeEditor />

          <input type="file" onChange={(e) => handleFileSelect(e, "python")} />
        </div>
        <div className="code-editor">
          <select>
            <option value="cpp">C++</option>
            <option value="python">Python</option>
          </select>
          <CodeEditor />
          <input type="file" onChange={(e) => handleFileSelect(e, "cpp")} />
        </div>
      </div>
      <div className="bottom">
        <textarea
          className="input-textarea"
          placeholder="Give your input here..."
          value={inputText}
          onChange={handleInputChange}
        ></textarea>
        <button className="submit-button" onClick={handleCodeSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Homepage;
