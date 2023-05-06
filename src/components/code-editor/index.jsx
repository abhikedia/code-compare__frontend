import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";

const CodeEditor = ({ code, setCode }) => {
  return (
    <AceEditor
      width="100%"
      height="100%"
      mode="c_cpp"
      theme="monokai"
      fontSize={20}
      value={code}
      onChange={setCode}
      name="cpp-editor"
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
      }}
    />
  );
};

export default CodeEditor;
