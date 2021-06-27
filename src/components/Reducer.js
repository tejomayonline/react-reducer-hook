import React, { useReducer } from 'react';
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            state++;
            break;
        case 'DECREMENT':
            state--;
            break;
        default:
            throw new Error('Unknown action');
    }
    return state;
}
export default function Reducer() {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch({type: 'INCREMENT'})}>increment</button>
                <button onClick={() => dispatch({type: 'DECREMENT'})}>decrement</button>
            </div>
        </>
    )
}
