import { useReducer } from "react";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./action";
import reducer from "./reducer";
import { data } from "../data";

const initialState = {
  people: data,
  isLoading: false,
};

const UseReducerTuts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { people } = state;

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const clearList = () => {
    // setPeople([]);
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {
    // setPeople(data);
    dispatch({ type: RESET_LIST });
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {people.length > 0 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset items
        </button>
      )}
    </div>
  );
};

export default UseReducerTuts;
