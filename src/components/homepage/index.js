import React, { useState } from "react";

import "./index.scss";
import bufferToString from "../../utils/buffer-to-string";
import CodeEditor from "../code-editor";
import DraggableDiv from "../draggable-div";

const Homepage = () => {
  const [pythonCode, setPythonCode] = useState("");
  const [cppCode, setCppCode] = useState("");

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

  return (
    <div id="code-editor-container">
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

      <DraggableDiv />
    </div>
  );
};

export default Homepage;
