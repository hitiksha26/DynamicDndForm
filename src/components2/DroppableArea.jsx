import { useDroppable } from "@dnd-kit/core";

export const DroppableArea = ({ children }) => {
  const { setNodeRef, isOver } = useDroppable({ id: "droppable" });

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
      {children?.length ? children : <p>Drop items here</p>}
    </div>
  );
};
