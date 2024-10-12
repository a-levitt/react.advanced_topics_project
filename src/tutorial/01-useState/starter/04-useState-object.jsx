import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "John",
    age: 24,
    hobby: "read book"
  });


  const displayPerson = () => {
    setPerson({name: 'Peter', age: 28, hobby: 'skiing'});
  }

  return <>
    <h2>useState object example</h2>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h4>Enjoys: {person.hobby}</h4>
    <button
        className='btn'
        onClick={displayPerson}
    >
      next person: peter
    </button>
    </>
};

export default UseStateObject;
