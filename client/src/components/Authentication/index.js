import React from "react";
import Login from "./Login";
import SignUp from "./Signup";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../slice/authSlice";
import { useNavigate } from "react-router";

const Authenticate = () => {
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) return;
    navigate("/dashboard");
  }, [user]);

  return (
    <div style={{ gap: "2.5em" }} className="pb-10 container grid-two-columns">
      <Login />
      <SignUp />
    </div>
  );
};

export default Authenticate;
