        import { useState } from "react"

const Usestateq = () =>{
    const [inputValue,newChangeValue]=useState("this is a default name hassan" );
const onChange =(event)=>{
    const newval = event.target.value;
    newChangeValue(newval)
}


    return(



<div>
<input type="text" value={inputValue} placeholder="This is sometext.." onChange={onChange}></input>

</div>
)}
export default Usestateq

