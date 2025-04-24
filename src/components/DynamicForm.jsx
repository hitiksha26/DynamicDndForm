import React from "react";
import FieldRenderers from "./FieldRenderers";

function DyamicForm({ schema }) {
  console.log("schema", schema);

  const renderInput = (field, fieldIndex) => {
    const Component = FieldRenderers[field.type] || FieldRenderers["text"];
    return <Component key={fieldIndex} field={field} />;
  };

  return (
    <>
      <h2>data</h2>
      {schema.map((section, sectionIndex) => (
        <div className="form-section" key={sectionIndex}>
          <h3>{section.sectionTitle}</h3>
          {section.fields.map((field, fieldIndex) => (
            <div key={`${sectionIndex}-${fieldIndex}`}>{renderInput(field, fieldIndex)}</div>
          ))}
        </div>
      ))}
    </>
  );
}
export default DyamicForm;
