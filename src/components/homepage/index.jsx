import React, { useRef, useState } from "react";
import CodeEditor from "../code-editor";
import Footer from "../footer";
import Split from "react-split";
import Header from "../header";
import "./index.scss";
import bufferToString from "../../utils/buffer-to-string";
import { Modal } from "@mantine/core";

let lang1 = "cpp",
  lang2 = "cpp";

const Homepage = () => {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [result1, setResult1] = useState({});
  const [result2, setResult2] = useState({});
  const [showModal, setShowModal] = useState(false);

  const inputRef = useRef();

  const handleFileSelect = (event, editorType) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const fileContent = reader.result;
      const selectedEditor = editorType === "code1" ? setCode1 : setCode2;
      selectedEditor(fileContent);
    };
    reader.readAsText(file);
  };

  const onSubmit = async () => {
    const code_1 = {
      language: lang1,
      code: code1,
    };
    const code_2 = {
      language: lang2,
      code: code2,
    };

    fetch("http://localhost:4000/api/v1/code", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code1: code_1,
        code2: code_2,
        input: inputRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setResult1({
          output: bufferToString(res.data.code1.output),
          time: bufferToString(res.data.code1.time),
        });

        setResult2({
          output: bufferToString(res.data.code2.output),
          time: bufferToString(res.data.code2.time),
        });
      })
      .then(() => setShowModal(true))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Header />
      <Modal centered opened={showModal} onClose={() => setShowModal(false)}>
        <div>
          <div>Compilation Output</div>
          <div>
            <div>
              {result1.output}
              <br />
              {result1.time}
            </div>
          </div>
        </div>
      </Modal>
      <Split
        style={{ height: "calc(100vh - 3rem)" }}
        direction="vertical"
        sizes={[75, 25]}
        cursor="col-resize"
        gutterAlign="center"
      >
        <div id="code-editor-container">
          <div className="code-editor">
            <select onChange={(e) => (lang1 = e.target.value)}>
              <option value="cpp">C++</option>
              <option value="python">Python</option>
            </select>
            <CodeEditor code={code1} setCode={setCode1} />
            <input type="file" onChange={(e) => handleFileSelect(e, "code1")} />
          </div>
          <div className="code-editor">
            <select onChange={(e) => (lang2 = e.target.value)}>
              <option value="cpp">C++</option>
              <option value="python">Python</option>
            </select>
            <CodeEditor code={code2} setCode={setCode2} />
            <input type="file" onChange={(e) => handleFileSelect(e, "code2")} />
          </div>
        </div>

        <Footer onSubmit={onSubmit} inputRef={inputRef} />
      </Split>
    </>
  );
};

export default Homepage;
