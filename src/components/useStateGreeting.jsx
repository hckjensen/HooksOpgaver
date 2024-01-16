import { useState } from "react";

const Greeting = () => {
    const [name, setName] = useState(''); // initial state
    const [greeting, setGreeting] = useState(''); // initial state
    const [displayGreeting, setDisplayGreeting] = useState(''); // initial state

    //Ændrer 'name' til det der står i inputfeltet
    const handleChange = (e) => {
        setName(e.target.value);
    };

    //Ændrer 'greeting' til det der står i inputfeltet
    const changeGreeting = (e) => {
        setGreeting(e.target.value); 
    };

    //Sætter 'displayGreeting' til at være 'greeting' + 'name'
    const handleSubmit = (e) => {
        e.preventDefault(); // forhindrer at siden refresher
        setDisplayGreeting(`${greeting || 'Hello'} ${name}`); // hvis greeting er tom, så skriv 'Hello'
        setName(''); // resetter inputfeltet
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