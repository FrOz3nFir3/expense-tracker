import React from "react";
import { Link } from "react-router-dom";
// import { useGetAuthDetailsQuery } from "../slice/apiSlice";
// import { selectCurrentUser, initialUser } from "../slice/authSlice";
// import { useDispatch, useSelector } from "react-redux";

const Header = (props) => {
//   const { data: existingUser = {}, isSuccess } = useGetAuthDetailsQuery();
//   const dispatch = useDispatch();

//   React.useEffect(() => {
//       dispatch(initialUser(existingUser));
//   }, [existingUser]);

//   const user = useSelector(selectCurrentUser);

  return (
    <ul className="header flex">
      <div>Expense Tracker</div>
      
      {/* {isSuccess ? (
        user == null ? (
          <li>
            <Link to="/authenticate">Login / Sign Up</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </>
        )
      ) : (
        <li>loading..</li>
      )} */}
    </ul>
  );
}

export default Header;
