import { useState, useCallback } from "react";
import List from "./List";
import { data } from "../../tutorial/data";

// ! A memoized component checks if the props is changing for it to be rerendered

// ! A useCallback a hook to memoized a function

const ReactMemo = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const handleRemove = useCallback(
    (id) => {
      setPeople(people.filter((person) => person.id !== id));
    },
    [people]
  );

  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: "1rem" }}
      >
        count {count}
      </button>
      <List people={people} handleRemove={handleRemove} />
    </section>
  );
};

export default ReactMemo;
