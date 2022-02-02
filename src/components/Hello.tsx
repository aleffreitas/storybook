import { useState } from "react"

export function Hello(){
    const [number, setNumber] = useState(0);

    function Increment(){
        setNumber(number + 1);
    }

    return(
        <>
        <h1>{number}</h1>

        <button onClick={Increment}>Incrementar</button>
        </>
    )
}