import { useContext, useEffect, useState } from "react";
import MyContext from "./UseContext";

const UseState = () => {
    const [count, setCount] = useState(0); // Initialize state to 0
    let count1 = 0;
    // Function to increment count
    const incrementCount = () => {
        count1 += 1;
        setCount(count + 1); // Update count state
        console.log("Count: ", count);
        console.log("Count1: ", count1);
    };
    useEffect(() => {
        console.log("useEffect Count: ", count);
    }, [count])

    const context = useContext(MyContext);
    return (
        <div>
            <h4>{context}</h4>
            <p>Count: {count} // Updating cause it is a state.</p> {/* Display count */}
            <p>Count1: {count1} // Not Updating cause it is just a let variable.</p> {/* Display count */}
            <button onClick={incrementCount}>Increment</button> {/* Button to increment count */}
        </div>
    );
}

export default UseState