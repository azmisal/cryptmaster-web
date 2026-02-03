import { useState } from "react";
import axios from 'axios'
import "./Test.css"
export const TextButtonPage=()=> {
    const [message1, setMessage1] = useState("Empty");
    const [message2, setMessage2] = useState("Empty");

    const handleClick = async () => {
        try {
            const response = await axios.get("http://localhost:5000/app/test");
            setMessage1(response.data.data1);
            setMessage2(response.data.data2);

        }
        catch(err){
            console.log(err);
        }
  };

    return (
        <div className="mainDiv">
            <button className="but" onClick={handleClick}>Click</button>
            <p className="tex">{message1}</p>
            <p className="tex">{message2}</p>

        </div>
    );
}



