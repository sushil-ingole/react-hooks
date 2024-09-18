import { Ref, forwardRef, useImperativeHandle, useState } from 'react';

export type CounterRef = {
    resetCounter: () => void;
}

const Counter = (props: any, ref: Ref<CounterRef>) => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };
    const decrementCount = () => {
        setCount(count - 1);
    };

    const resetCounter = () => {
        setCount(0);
    };

    useImperativeHandle(ref, () => ({
        resetCounter,
    }));

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
}

export default forwardRef(Counter)
