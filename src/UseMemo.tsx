import { useMemo, useState } from "react";
import initialItems from "./utils";

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    // const selectedItem = items.find((item) => item.isSelected);
    const selectedItem = useMemo(() => items.find((item) => item.isSelected), [items]);

    function increment() {
        setCount(count + 1);
    }

    return (
        <div className="container border">
            <h3>Count: {count}</h3>
            <h3>Selected item: {selectedItem?.id}</h3>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default UseMemo
