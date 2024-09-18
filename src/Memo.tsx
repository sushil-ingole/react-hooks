import Name from "./Name";
import Marks from "./Marks";
import { useCallback, useState } from "react";

const Memo = () => {
    const [name, setName] = useState("Name1");
    const [marks, setMarks] = useState("80");
    const [count, setCount] = useState(0);
    const incrementCount = useCallback(() => {
        console.log("incrementCount");
        setCount((c) => c + 1);
    }, []);
    return (
        <div>
            <button onClick={() => setName("Name2")}>Update name</button>
            <Name name={name} incrementCount={incrementCount} />
            <Marks marks={marks} />
            <button onClick={() => setMarks("90")}>Update marks</button>
            <h3>Count: {count}</h3>
        </div>
    )
}

export default Memo;
