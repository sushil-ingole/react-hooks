import { useRef, useState } from "react";

const UseRef = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const handleIncrement = () => {
        setCount(count + 1);
        countRef.current++;

        console.log("State:", count);
        console.log("Ref:", countRef.current);
    };

    return (
        <div>
            Count: {count}
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default UseRef
