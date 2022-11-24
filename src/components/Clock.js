import { useState, useEffect } from "react";

const Clock=()=>{
    const [count, setCount] = useState();

    useEffect(() => {
      setTimeout(() => {
        setCount(new Date().toLocaleTimeString());
      }, 1000);
    }, [count]);

    return <h1>{count}</h1>
};
export default Clock;