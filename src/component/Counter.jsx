import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <div className="mainDivCounter">
        {/* Button to increment the counter */}
        <div> {count}</div>
        <div className="increntBtn" onClick={() => setCount(count > 0 ? count - 1 : 0)}><AiFillMinusCircle/></div>
        <div className="increntBtn" onClick={() => setCount(count + 1)}><AiFillPlusCircle/></div>

        {/* Button to decrement the counter */}
      
      </div>
    </React.Fragment>
  );
};

export default Counter;
