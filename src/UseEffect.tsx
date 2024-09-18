import { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);
    // Update document title when count changes
    useEffect(() => {
        document.title = `Count: ${count}`;
        return () => {
            document.title = "";
        }
    }, [count]); // Dependency array contains only 'count', effect runs when 'count' changes
    // }, []); // Dependency array is empty, effect runs once after the first render
    // }); // Dependency array is omitted, effect runs after every render

    // Function to increment count
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <br />
            <br />
            <hr />
            <br />
            <span>See 'Page Title' getting changed on each increment, it is happening due to useEffect.</span>
        </div>
    );

}

export default UseEffect
