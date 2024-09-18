import React from "react";

interface IName { 
    name: string; 
    incrementCount: Function;
};

const Name = (props: IName) => {
    console.log("Inside Name");
    return (
        <div>
            <h3>{props.name}</h3>
            <button onClick={() => props.incrementCount()}>Increment count</button>
        </div>
    )
}

export default React.memo(Name);
