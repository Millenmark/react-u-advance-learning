import { data } from "../data";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./action";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CLEAR_LIST:
      return { ...state, people: [] };
    case RESET_LIST:
      return { ...state, people: data };
    case REMOVE_ITEM:
      return {
        ...state,
        people: state.people.filter((person) => person.id !== payload.id),
      };
    default:
      throw new Error("No matching action type");
  }
};

export default reducer;
