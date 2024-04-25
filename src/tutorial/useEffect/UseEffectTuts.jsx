import { useEffect, useState } from "react";

const UseEffectTuts = () => {
  // const url = "https://api.github.com/users";
  // const [value, setValue] = useState(0);
  // const [secondValue, setSecondValue] = useState(0);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await fetch(url);
  //       const users = await response.json();
  //       console.log(users);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);
  // return (
  //   <div>
  //     <h1>value: {value}</h1>
  //     <button className="btn" onClick={() => setValue(value + 1)}>
  //       click me
  //     </button>
  //     <h1>value: {secondValue}</h1>
  //     <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
  //       click me
  //     </button>
  //   </div>
  // );

  /**
   * ! WITH API FETCHING
   */

  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <section>
      <h3>GitHub Users</h3>
      <ul className="users">
        {users.map((user) => (
          <li key={user?.id}>
            <img src={user?.avatar_url} alt={user?.login} />
            <div>
              <h5>{user?.login}</h5>
              <a href={user?.html_url} target="_blank">
                Profile
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UseEffectTuts;
