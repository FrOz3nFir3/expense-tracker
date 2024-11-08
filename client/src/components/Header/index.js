import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initialUser, selectCurrentUser } from "../../slice/authSlice";
import { useGetAuthDetailsQuery } from "../../slice/apiSlice";

const Header = (props) => {
  const { data: existingUser = {}, isSuccess, error } = useGetAuthDetailsQuery();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(initialUser(existingUser));
  }, [existingUser]);

  const user = useSelector(selectCurrentUser);

  return (
    <ul className="header flex justify-between">
      <NavLink to="/">Expense Tracker</NavLink>

      {error && <li className="bg-error">{error.data.message}</li>}
      {isSuccess ? (
        user == null ? (
          <li>
            <Link to="/authenticate">Login / Sign Up</Link>
          </li>
        ) : (
          <div className="flex">
            <li>
              <Link to={"/dashboard"}>DashBoard</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </div>
        )
      ) : (
        <li>loading...</li>
      )}
    </ul>
  );
};

export default Header;
