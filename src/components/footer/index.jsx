import React, { useState } from "react";
import { Tabs, Textarea, Button } from "@mantine/core";
import Results from "../results";
import "./index.scss";

const Footer = ({ onSubmit, inputRef, result1, result2 }) => {
  const [activeTab, setActiveTab] = useState("testcase");

  return (
    <Tabs value={activeTab} onTabChange={setActiveTab}>
      <Tabs.List grow position="center">
        <Tabs.Tab value="testcase">Testcase</Tabs.Tab>
        <Tabs.Tab value="results">Results</Tabs.Tab>
      </Tabs.List>

      <div id="draggable-div">
        {activeTab === "testcase" ? (
          <div className="testcase">
            <Textarea
              ref={inputRef}
              placeholder="Give your testcase here..."
              className="text-area"
              radius="md"
            />
            <Button size="md" radius="md" onClick={onSubmit}>
              Submit
            </Button>
          </div>
        ) : (
          <Results result1={result1} result2={result2} />
        )}
      </div>
    </Tabs>
  );
};

export default Footer;
