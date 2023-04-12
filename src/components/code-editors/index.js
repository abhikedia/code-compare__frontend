import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "./index.scss";

function CodeEditor() {
  const [pythonCode, setPythonCode] = useState("");
  const [cppCode, setCppCode] = useState("");

  const handleFileSelect = (event, editorType) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (editorType === "python") {
        setPythonCode(reader.result);
      } else if (editorType === "cpp") {
        setCppCode(reader.result);
      }
    };
    reader.readAsText(file);
  };

  const handleCodeSubmit = () => {
    console.log("Python code:", pythonCode);
    console.log("C++ code:", cppCode);
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
          <AceEditor
            mode="python"
            width="100%"
            height="100%"
            theme="monokai"
            value={pythonCode}
            onChange={setPythonCode}
            name="python-editor"
            editorProps={{ $blockScrolling: true }}
          />
          <input type="file" onChange={(e) => handleFileSelect(e, "python")} />
        </div>
        <div className="code-editor">
          <select>
            <option value="cpp">C++</option>
            <option value="python">Python</option>
          </select>
          <AceEditor
            width="100%"
            height="100%"
            mode="c_cpp"
            theme="monokai"
            value={cppCode}
            onChange={setCppCode}
            name="cpp-editor"
            editorProps={{ $blockScrolling: true }}
          />
          <input type="file" onChange={(e) => handleFileSelect(e, "cpp")} />
        </div>
      </div>
      <button className="submit-button" onClick={handleCodeSubmit}>
        Submit
      </button>
    </div>
  );
}

export default CodeEditor;
