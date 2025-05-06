import { useDraggable } from "@dnd-kit/core";

const DraggableInput = ({ id, children }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
      id,
    });
  
    const style = {
      transform: transform
        ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
        : undefined,
      padding: "10px",
      margin: "8px 0",
      border: "1px solid #ccc",
      background: "#fff",
      cursor: "grab",
    };
  
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        id={id}
        className="draggable-item"
        data-id={id}
      >
        {children}
      </div>
    );
  };

  export default DraggableInput;
  