import { useState } from "react";

const Greeting = () => {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');
    const [displayGreeting, setDisplayGreeting] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const changeGreeting = (e) => {
        setGreeting(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayGreeting(`${greeting || 'Hello'} ${name}`);
        setName('');
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '6rem',
        }}>
            <h1 style={{
                textAlign: 'center',
                color: 'black',
                fontSize: '2rem'
            }}>Greeting</h1>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="">Hilsen</label>
                <input type="text" value={greeting} onChange={changeGreeting} />
            </form>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Navn</label>
                <input type="text" value={name} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            <p>{displayGreeting}</p>
        </div>
    );
}
export default Greeting;