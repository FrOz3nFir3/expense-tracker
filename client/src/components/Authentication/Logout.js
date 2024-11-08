import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialUser } from "../../slice/authSlice";
import { usePostLogoutUserMutation } from "../../slice/apiSlice";

function Logout(props) {
  const [logoutUser, { isSuccess, error }] = usePostLogoutUserMutation();
  React.useEffect(() => {
    logoutUser();
  }, []);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!isSuccess) return;
    dispatch(initialUser({ user: null }));
  }, [isSuccess]);

  return (
    <div className="container">
      {error && <div className="bg-error p-1">{error.data?.error}</div>}
      <h2 className="text-center">
        {isSuccess ? "Successfully logged out" : "Not Logged in "}
      </h2>
    </div>
  );
}

export default Logout;
