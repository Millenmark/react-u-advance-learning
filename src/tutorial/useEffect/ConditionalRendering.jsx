import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const ConditionalRendering = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(url);
        const user = await data.json();
        setUser(user);
        setIsLoading(false);
      } catch (error) {
        setHasError(true);
        console.log(error);
      }
    })();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;

  if (hasError) return <h2>There is an error...</h2>;

  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={user?.avatar_url}
        alt=""
      />
      <h2>{user?.name}</h2>
      <h4>works at: {user?.company}</h4>
      <p>{user?.bio}</p>
    </div>
  );
};

export default ConditionalRendering;
