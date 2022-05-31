import React, { ChangeEvent, FormEvent, useState } from 'react';


interface User {
    name?: string,
    job?: string
}

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [user, setUser] = useState<User | null>({ name: '', job: '' });
    const handleIncrease = (): void => {
        setCounter(counter + 1)

    }

    const handleUserSumbit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            name: 'adnan',
            job: 'developer',


        }
        setUser(userData)
    }

    const handleNameChange = (e: ChangeEvent<HTMLElement>): void => {

    }
    return (
        <div>
            <h1>This is Counter</h1>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;