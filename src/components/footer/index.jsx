import React from "react";
import { Tabs, Textarea, Button } from "@mantine/core";
import "./index.scss";

const Footer = () => {
  return (
    <div id="draggable-div">
      <Tabs defaultValue="testcase">
        <Tabs.List grow position="center">
          <Tabs.Tab value="testcase">Testcase</Tabs.Tab>
          <Tabs.Tab value="results">Results</Tabs.Tab>
        </Tabs.List>

        <div className="content">
          <Tabs.Panel value="testcase" className="text-input">
            <Textarea
              placeholder="Give your testcase here..."
              autosize
              className="text-area"
              radius="md"
            />
            <Button size="sm" radius="md">
              Submit
            </Button>
          </Tabs.Panel>

          <Tabs.Panel value="results" pt="xs">
            Messages tab content
          </Tabs.Panel>
        </div>
      </Tabs>
    </div>
  );
};

export default Footer;
