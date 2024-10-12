import React from 'react';
import {data} from "../../../data.js"

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  return <div>
    {people.map((person) => {
      const {id, name} = person;
      return <div key={id}>{name}</div>;
    })}
  </div>;
};

export default UseStateArray;
