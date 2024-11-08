import React from "react";
import { useDispatch } from "react-redux";
import { initialUser } from "../../slice/authSlice.js";
import { usePostRegisterUserMutation } from "../../slice/apiSlice.js";

const Signup = () => {
  const [registerUser, { data, isLoading, error }] =
    usePostRegisterUserMutation();

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (data != null) {
      dispatch(initialUser(data));
    }
  }, [data]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // call api here
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    registerUser({ email, password, confirmPassword });
  };

  return (
    <div className="flow-content card form bg-dark-form self-start">
      <h2>Signup / Register</h2>
      {error?.data && <div className="bg-error p-1">{error.data?.error}</div>}
      <form onSubmit={handleFormSubmit} className="">
        <input name="email" type="email" placeholder="Email" required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
        />
        <button
          disabled={isLoading}
          type="submit"
          className="btn bg-light-form border-round-none ml-0"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
