const TextInput=({field})=>{
    return(<div>
        <label>{field.label}</label>
        <input type={field.type} name={field.name}></input>
    </div>)

}

export default TextInput