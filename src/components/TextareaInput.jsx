const TextareaInput = ({ field }) => {
  return (
    <div>
      <label>{field.label}</label>
      <textarea
        name={field.name}
        rows={field.rows || 4}
        cols={field.cols || 30}
      ></textarea>
    </div>
  );
};
export default TextareaInput;
