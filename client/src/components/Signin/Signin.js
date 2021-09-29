import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { signin } from "../../actions/authActions";

const Signin = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    dispatch(signin(data, push));
  };

  return (
    <div className="row">
      <div className="col-md-6 col mx-auto card">
        <form
          className="form-signin m-4"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h1 className="h3 mb-3 font-weight-normal">sign in</h1>
          {error && <div className="alert-danger alert">{error}</div>}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className={`form-control ${
                errors?.email?.message ? "is-invalid" : ""
              }`}
              id="email"
              placeholder="name@example.com"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
            />
            <div className="invalid-feedback">invalid email or password</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-control ${
                errors?.password?.message ? "is-invalid" : ""
              }`}
              id="password"
              name="password"
              placeholder="Password"
              {...register("password", { required: "password is required" })}
            />
            <div className="invalid-feedback">invalid email or password</div>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input
                name="remember"
                type="checkbox"
                {...register("remember")}
              />{" "}
              Remember me
            </label>
          </div>
          <button
            disabled={loading}
            className="btn btn-lg btn-primary btn-block"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
