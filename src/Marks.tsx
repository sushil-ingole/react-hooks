import React from "react";

const Marks = (props: { marks: string }) => {
    console.log("Inside Marks");
    return (
        <div>
            <h3>{props.marks}</h3>
        </div>
    )
}

export default React.memo(Marks);
