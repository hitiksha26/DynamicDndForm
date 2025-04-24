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
  rectIntersection
} from "@dnd-kit/core";
import TextInput from "./TextInput";
import TextareaInput from "./TextareaInput";

function DyamicForm2() {
  const [isDropped, setIsDropped] = useState(null);

  // ✅ Sensors setup
  const sensors = useSensors(useSensor(PointerSensor));

  // ✅ Droppable setup
  const { setNodeRef, isOver } = useDroppable({ id: "droppable" });

  const style = {
    minHeight: "150px",
    border: "2px dashed gray",
    padding: "10px",
    backgroundColor: isOver ? "#e6ffe6" : "#f9f9f9",
    position: "relative"
  };
  

  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log("ACTIVE:", active?.id);
    console.log("OVER:", over?.id); // This must match "droppable"
  
    if (over?.id === "droppable") {
      setIsDropped(active.id);
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
            <div id="droppable" ref={setNodeRef} style={style}>
              {isDropped === "text-input" && <TextInput />}
              {isDropped === "textarea-input" && <TextareaInput />}
              {!isDropped && <p>Drag and drop an input here</p>}
            </div>
          </Col>
          <Col md={6}>
            <h5>Available Inputs</h5>
            <Content />
          </Col>
        </Row>
      </Container>
    </DndContext>
  );
}

export default DyamicForm2;
