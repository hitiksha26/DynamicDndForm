import React, { useState } from "react";
import { DndContext, useSensor, useSensors, PointerSensor, closestCenter, useDroppable, useDraggable, DragOverlay } from "@dnd-kit/core";

const DraggableItem = ({ id, label }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        cursor: "grab",
        background: "white"
      }}
    >
      {label}
    </div>
  );
};

const DroppableArea = ({ children }) => {
    const { setNodeRef, isOver } = useDroppable({ id: "drop-area" });
  
    return (
      <div
        ref={setNodeRef}
        style={{
          minHeight: "200px",
          border: "2px dashed #888",
          padding: "10px",
          backgroundColor: isOver ? "#e0ffe0" : "#fafafa",
        }}
      >
        {children.length ? children : <p>Drop items here</p>}
      </div>
    );
  };
  

const DragDropMultiForm = () => {
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(useSensor(PointerSensor));
  const { setNodeRef, isOver } = useDroppable({ id: "drop-area" });

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveId(null);
    if (over?.id === "drop-area") {
      setItems((prev) => [...prev, active.id]);
    }
  };

  const getLabel = (id) => {
    switch (id) {
      case "text-input":
        return <input type="text" placeholder="Text Input" />;
      case "textarea-input":
        return <textarea placeholder="Textarea Input" rows={3} />;
      default:
        return null;
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
        <div style={{ width: "40%" }}>
          <h4>Draggable Inputs</h4>
          <DraggableItem id="text-input" label="Text Input" />
          <DraggableItem id="textarea-input" label="Textarea Input" />
        </div>

        <div style={{ width: "60%" }}>
          <h4>Form Area</h4>
          <DroppableArea>
            {items.map((id, idx) => (
              <div key={idx} style={{ marginBottom: "10px" }}>
                {getLabel(id)}
              </div>
            ))}
          </DroppableArea>
        </div>
      </div>

      <DragOverlay>
        {activeId ? <div style={{ padding: "10px", background: "#fff", border: "1px solid #ccc" }}>{activeId.replace("-", " ")}</div> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DragDropMultiForm;
 