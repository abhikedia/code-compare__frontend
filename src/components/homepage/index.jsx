import React, { useState } from "react";
import CodeEditor from "../code-editor";
import Footer from "../footer";
import Split from "react-split";
import Header from "../header";
import "./index.scss";

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
    <>
      <Header />
      <Split
        style={{ height: "calc(100vh - 3rem)" }}
        direction="vertical"
        sizes={[75, 25]}
        cursor="col-resize"
        gutterAlign="center"
      >
        <div id="code-editor-container">
          <div className="code-editor">
            <select>
              <option value="cpp">C++</option>
              <option value="python">Python</option>
            </select>
            <CodeEditor />

            <input
              type="file"
              onChange={(e) => handleFileSelect(e, "python")}
            />
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

        <Footer />
      </Split>
    </>
  );
};

export default Homepage;
