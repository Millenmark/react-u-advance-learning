/* eslint-disable no-unused-vars */
import { useState } from "react";
import useToggle from "../useToggle";

const ToggleExample = () => {
  const { show, toggle } = useToggle(true);

  return (
    <div>
      <h4>Toggle Custom Hook</h4>
      <button className="btn" onClick={toggle}>
        Toggle
      </button>
      {show && <h4>Some Stuff</h4>}
    </div>
  );
};

export default ToggleExample;
