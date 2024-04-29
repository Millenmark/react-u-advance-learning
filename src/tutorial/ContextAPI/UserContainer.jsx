import { useContext } from "react";
import { NavbarContext } from "./Navbar";

/* eslint-disable react/prop-types */
const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext);

  return (
    <div className="user-container">
      <p>Hello There, {user?.name}</p>
      <button className="btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default UserContainer;
