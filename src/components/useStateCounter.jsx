

import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    };

    const subtract = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    }

    return (
        <div style={
            {
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '6rem',
            }

        }>
            <p>Count: {count}</p>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;