const DropdownInput = ({field}) => {
  return (
    <div>
      <label>{field.label}</label>
      <select name={field.name}>
        {field.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropdownInput;
