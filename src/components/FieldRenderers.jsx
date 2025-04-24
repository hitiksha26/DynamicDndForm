import TextInput from "./TextInput";
import DropdownInput from "./DropdownInput";
import RadioInput from "./RadioInput";
import TextareaInput from "./TextareaInput";

const FieldRenderers = {
  text: TextInput,
  dropdown: DropdownInput,
  radio: RadioInput,
  textarea : TextareaInput,
};
export default FieldRenderers;
