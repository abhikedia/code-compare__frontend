import React from "react";
import { Tabs, Textarea, Button } from "@mantine/core";
import "./index.scss";

const DraggableDiv = () => {
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
              minRows={10}
              className="text-area"
              radius="lg"
            />
            <Button size="md" radius="md">
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

export default DraggableDiv;
