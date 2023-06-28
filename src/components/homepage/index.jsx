import React, { useRef, useState } from "react";
import CodeEditor from "../code-editor";
import Footer from "../footer";
import Split from "react-split";
import Header from "../header";
import bufferToString from "../../utils/buffer-to-string";
import { LoadingOverlay, Modal } from "@mantine/core";
import Results from "../results";
import { Analytics } from "@vercel/analytics/react";
import "./index.scss";

let lang1 = "cpp",
  lang2 = "cpp";

const options = [
  { lang: "c", name: "C" },
  { lang: "cpp", name: "C++" },
  { lang: "py", name: "Python" },
  // { lang: "java", name: "Java" },
];

const Homepage = () => {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [result1, setResult1] = useState({});
  const [result2, setResult2] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const code_1 = {
      language: lang1,
      code: code1,
    };
    const code_2 = {
      language: lang2,
      code: code2,
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch("https://3.6.231.178/api/v1/code", {
      method: "POST",
      headers: myHeaders,
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
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Analytics />
      <Header />
      <Modal
        centered
        size={"xl"}
        opened={showModal}
        onClose={() => setShowModal(false)}
      >
        <div className="bold-header">Compilation Output</div>
        <Results result1={result1} result2={result2} />
      </Modal>
      <LoadingOverlay visible={loading} overlayBlur={2} />
      <Split
        style={{ height: "calc(100vh - 3rem)" }}
        direction="vertical"
        sizes={[75, 25]}
        cursor="row-resize"
        gutterAlign="center"
      >
        <div id="code-editor-container">
          <div className="code-editor">
            <select
              onChange={(e) => (lang1 = e.target.value)}
              defaultValue="cpp"
            >
              {options.map((option) => (
                <option value={option.lang}>{option.name}</option>
              ))}
            </select>
            <CodeEditor code={code1} setCode={setCode1} />
            <input type="file" onChange={(e) => handleFileSelect(e, "code1")} />
          </div>
          <div className="code-editor">
            <select
              onChange={(e) => (lang2 = e.target.value)}
              defaultValue="cpp"
            >
              {options.map((option) => (
                <option value={option.lang}>{option.name}</option>
              ))}
            </select>
            <CodeEditor code={code2} setCode={setCode2} />
            <input type="file" onChange={(e) => handleFileSelect(e, "code2")} />
          </div>
        </div>

        <Footer
          onSubmit={onSubmit}
          inputRef={inputRef}
          result1={result1}
          result2={result2}
        />
      </Split>
    </>
  );
};

export default Homepage;
