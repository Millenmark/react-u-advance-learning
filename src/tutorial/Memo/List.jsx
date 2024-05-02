/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { memo } from "react";
import Item from "./Person";

const List = ({ people, handleRemove }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} handleRemove={handleRemove} />;
      })}
    </div>
  );
};
export default memo(List);
