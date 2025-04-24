const RadioInput=({field})=>{
return(
    <div><label>{field.label}</label>
    <div>
        {field.options.map((option, index)=>(
            <label key={index} style={{ marginRight: "10px" }}>
            <input type={field.type} name={field.name}/>

            {option}
            </label>
        ))}
    </div></div>
)
}
export default RadioInput;