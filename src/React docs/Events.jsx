import React, { useState } from "react";



export default function Hellow() {

return(

    <div>
        <h1>Counters Update</h1>
        <Mybutton /><br />
        <Mybutton />
    </div>
);
}

function list() {
    
}

function Mybutton() {

    const [count, setCount] = useState(0)
    
    function handleCLick() {

        setCount(count + 1); 
    }

    return(

        <button onClick={handleCLick} >Click {count} times</button>
        

        )
    
};