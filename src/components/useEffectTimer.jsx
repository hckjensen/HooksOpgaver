import { useState, useEffect } from 'react';




const Timer = () => {

    useEffect(() => {
        document.title = 'React Hooks';
    }, []);

    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (isActive) {
            const id = setInterval(() => {
                setCount(count => count + 1);
            }, 1000);
            setIntervalId(id);
        } else if (!isActive && intervalId) {
            clearInterval(intervalId);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isActive]);

    const handleStart = () => {
        setIsActive(true);
    };

    const handleStop = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setCount(0);
    }


    return (

        <>
            <h1 style={{
                textAlign: 'center',
                color: 'black',
                fontSize: '2rem'

            }}>Stopwatch</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '6rem',

            }}>
                <p style={{
                    display: 'flex',
                    width: '10rem',
                    height: '5rem',
                    fontSize: '2rem',
                    color: 'lightgreen',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'black',
                    borderRadius: '1rem',

                }}> {count}</p>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginTop: '6rem'
                }}>
                    <button onClick={handleStart}>Start</button>
                    <button onClick={handleStop}>Stop</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div >


        </>
    )

}


export default Timer;