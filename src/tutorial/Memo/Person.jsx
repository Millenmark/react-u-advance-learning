/* eslint-disable react/prop-types */
const Person = ({ name, handleRemove, id }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => handleRemove(id)}>Remove</button>
    </div>
  );
};
export default Person;
