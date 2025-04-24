import React from "react";
import Accordion from "react-bootstrap/Accordion";
import TextInput from "./TextInput";
import TextareaInput from "./TextareaInput";
import DraggableInput from "./DraggableInput";

function Content() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Sections</Accordion.Header>
        <Accordion.Body>1</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Layouts</Accordion.Header>
        <Accordion.Body>1</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Inputs</Accordion.Header>
        <Accordion.Body>
          <DraggableInput id="text-input">
            <TextInput />
          </DraggableInput>
          <br />
          <DraggableInput id="textarea-input">
            <TextareaInput />
          </DraggableInput>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Content;
