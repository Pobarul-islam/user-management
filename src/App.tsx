import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';

let student: string = 'jolly';
let age: number = 43;
let isSmart: boolean = true;

let students: string[] = ['joe', 'biden', 'trump', 'abul'];

let fees: number[] = [12, 34, 55, 33];


// Interface 

interface Person {
  name: string,
  job?: string,
  employed: string | boolean,
  age: number,
  location?: string | number;
}

const person: Person = {
  name: 'abul',
  employed: true,
  job: 'software',
  age: 86
}


const handleAddUser = (firstName: string, age: number, address: string): number => {
  const total: number = 50;
  console.log(firstName, age, address);
  return total;
}




function App() {
  return (
    <div className="App">

      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
