import { useReducer } from 'react';

interface ICounter {
    count: number;
    error?: string | null;
}

interface IAction {
    type: string;
    payload?: any;
}

const reducer = (state: ICounter, action: IAction) => {
    switch (action.type) {
        case 'increment':
            const newCount = state.count + 1;
            const hasError = newCount > 5;
            return { ...state, count: hasError ? state.count : state.count + 1, error: hasError ? 'Max reached' : '' };
        case 'decrement':
            const newCount1 = state.count - 1;
            const hasError1 = newCount1 < 0;
            return { ...state, count: hasError1 ? state.count : state.count - 1, error: hasError1 ? 'Min reached' : '' };
        default:
            return state;
    }
};
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            {state.error ? <h4>{state.error}</h4> : null}
        </div>

    )
}

export default UseReducer;
