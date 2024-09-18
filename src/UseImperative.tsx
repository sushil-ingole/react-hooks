import { useRef } from 'react';
import Counter, { CounterRef } from './Counter';

const UseImperativeHook = () => {
    const counterRef = useRef<CounterRef>(null);

    return (
        <div>
            <Counter ref={counterRef} />
            <button onClick={() => counterRef.current?.resetCounter()}>Reset from parent</button>
        </div>
    );
}

export default UseImperativeHook;
