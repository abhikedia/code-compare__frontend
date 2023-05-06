import React, { useState } from "react";
import { Tabs, Textarea, Button } from "@mantine/core";
import "./index.scss";

const Footer = ({ onSubmit, inputRef }) => {
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
              // autosize
              // minRows={4}
              className="text-area"
              radius="md"
            />
            <Button size="sm" radius="md" onClick={onSubmit}>
              Submit
            </Button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </Tabs>
  );
};

export default Footer;
