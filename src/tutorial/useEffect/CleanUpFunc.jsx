/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const CleanUpFunc = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h2>Clean Up Function</h2>

      <section>
        <button className="btn" onClick={() => setToggle(!toggle)}>
          Toggle Component
        </button>

        {toggle && <RandomComponent />}
      </section>
    </>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log("Hello from useEffect Random Component");
    const intId = setInterval(() => {
      console.log("Hello from interval");
    }, 1000);
    // * The interval keeps on running even though you unmount the component and every time it mounts it become faster : This is not limited to interval

    // ! Clean up func : runs after the rerender and before the useEffect

    return () => {
      clearInterval(intId);
    };
  }, []);
  return <h1>Hello Broooooo</h1>;
};

export default CleanUpFunc;
