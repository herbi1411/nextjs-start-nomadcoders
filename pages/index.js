import { useState } from "react";
import NavBar from "../components/NavBar";
import Seo from "../components/Seo";

export default function Home(){
    
    const [counter, setCounter] = useState(0);

    return (
    <div>
        {/* <NavBar/> */}
        <Seo title="Home"/>
        <h1>Hello{counter}</h1>
        <button onClick={() =>{setCounter(prev=>prev+1);}}>+</button>
        {/* <style jsx ocglobal>{`
            a{
                color: orange;
            }
        `}</style> */}
    </div>
    );
}