import React, { useState } from "react";
import "./styles.css";
import Content from "./Content";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  useDroppable,
  rectIntersection,
} from "@dnd-kit/core";
import TextInput from "./TextInput";
import TextareaInput from "./TextareaInput";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import DraggableInput from "./DraggableInput";
import { Accordion } from "react-bootstrap";
import { DroppableArea } from "./DroppableArea";
import FileInput from "./FileInput";
import DateInput from "./DateInput";
import EmailInput from "./EmailInput";
import SubmitInput from "./SubmitInput";
import ResetInput from "./ResetInput";
import MonthInput from "./MonthInput";

function DyamicForm2() {
  const [items, setItems] = useState([]);
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over?.id === "droppable") {
      setItems((prev) => [...prev, active.id]);
    }
  };

  const getLabel = (id) => {
    switch (id) {
      case "text-input":
        return <TextInput />;
      case "textarea-input":
        return <TextareaInput />;
      case "checkbox-input":
        return <Checkbox />;
      case "radio-input":
        return <Radio />;
      case "file-input":
        return <FileInput />;
      case "date-input":
        return <DateInput />;
      case "email-input":
        return <EmailInput />;
      case "submit-input":
        return <SubmitInput />;
      case "reset-input":
        return <ResetInput />;
      case "month-input":
        return <MonthInput />;
      default:
        return null;
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={rectIntersection}
      onDragEnd={handleDragEnd}
    >
      <Container>
        <Row>
          <Col md={6}>
            <h5>Form Area (Drop Here)</h5>
            <DroppableArea>
              {items?.map((id, idx) => (
                <div key={idx} style={{ marginBottom: "10px" }}>
                  {getLabel(id)}
                </div>
              ))}
            </DroppableArea>
          </Col>
          <Col md={6}>
            <h5>Available Inputs</h5>
            {/* <Content /> */}
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
                  <DraggableInput id="text-input">{"Text"}</DraggableInput>
                  <DraggableInput id="textarea-input">
                    {"Text Area"}
                  </DraggableInput>
                  <DraggableInput id="checkbox-input">
                    {"Check box"}
                  </DraggableInput>
                  <DraggableInput id="radio-input">{"Radio"}</DraggableInput>
                  <DraggableInput id="button-input">{"Button"}</DraggableInput>
                  <DraggableInput id="file-input">{"File"}</DraggableInput>
                  <DraggableInput id="date-input">{"Date"}</DraggableInput>
                  <DraggableInput id="month-input">{"Month"}</DraggableInput>
                  <DraggableInput id="email-input">{"Email"}</DraggableInput>
                  <DraggableInput id="submit-input">{"Submit"}</DraggableInput>
                  <DraggableInput id="reset-input">{"Reset"}</DraggableInput>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </DndContext>
  );
}

export default DyamicForm2;
