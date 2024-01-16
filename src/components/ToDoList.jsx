import { useState } from "react";


const ToDoList = () => {
    const [list, setList] = useState([]); // initial state
    const [input, setInput] = useState(''); // initial state

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // forhindrer at siden refresher
        setList([...list, input]); // tilføjer input til listen
        setInput(''); // resetter inputfeltet
    };

    const handleDelete = (index) => {
        const newList = list.filter((item, i) => i !== index);
        setList(newList);
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
            }}>ToDo List</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Add item</label>
                <input type="text" value={input} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;