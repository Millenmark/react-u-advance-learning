import { useState } from "react";
import { data } from "../data";

const UseStateTuts = () => {
  const formInitialState = {
    nameInput: "",
  };

  const [people, setPeople] = useState(data);
  const [formValue, setFormValue] = useState(formInitialState);

  console.log(people);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPeople((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: formValue.nameInput,
      },
    ]);

    setFormValue(formInitialState);
  };

  const handleRemove = (id, all = false) => {
    if (!all) setPeople(people.filter((person) => person.id !== id));
    else setPeople([]);
  };

  return (
    <div>
      <h2>Use State Tutorial</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={formValue.nameInput}
          onChange={(e) =>
            setFormValue((prev) => ({ ...prev, nameInput: e.target.value }))
          }
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        {people.map((person, index) => (
          <div key={index}>
            <h4>{person.name}</h4>
            <button onClick={() => handleRemove(person.id)}>remove</button>
          </div>
        ))}
      </div>

      <button onClick={() => handleRemove("", true)}>Clear List</button>
    </div>
  );
};

export default UseStateTuts;
