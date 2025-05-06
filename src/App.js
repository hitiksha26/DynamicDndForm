import DyamicForm from "./components/DynamicForm";
import formSchema from "./data/FormSchema";
import DyamicForm2 from "./components2/DyamicForm2";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewFile from "./components3/NewFile";

function App() {
  return (
    // <div>
    //   <h2>Dyamic form</h2>
    //   <DyamicForm schema={formSchema}/>
    // </div>
    <div>
      {/* <h2>Dyamic form</h2> */}
      <DyamicForm2/>
      {/* <NewFile/> */}
    </div>
  );
}

export default App;
