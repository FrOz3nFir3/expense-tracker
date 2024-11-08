import React from "react";
import { useDispatch } from "react-redux";
import { initialUser } from "../../slice/authSlice.js";
import { usePostLoginUserMutation } from "../../slice/apiSlice.js";

const Login = () => {
  const [loginUser, { data, isLoading, error }] = usePostLoginUserMutation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (data != null) {
      dispatch(initialUser(data));
    }
  }, [data]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    // call api here
    loginUser({ email, password });
  };

  return (
    <div className="pb-10 card form flow-content self-start">
      <h2>Login / Sign in</h2>
      {error?.data && <div className="bg-error p-1">{error.data?.error}</div>}
      <form onSubmit={handleFormSubmit} className="">
        <input
          disabled={isLoading}
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          disabled={isLoading}
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <button
          disabled={isLoading}
          type="submit"
          className="btn bg-dark-form border-round-none ml-0"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
