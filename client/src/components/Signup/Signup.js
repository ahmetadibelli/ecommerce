import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { signup } from "../../actions/authActions";

const Signup = () => {
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
    dispatch(signup(data, push));
  };

  return (
    <div className="row">
      <div className="col-md-6 col mx-auto card">
        <form
          className="form-signin m-4"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h1 className="h3 mb-3 font-weight-normal">sign up</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              className={`form-control ${
                errors?.fullName?.message ? "is-invalid" : ""
              }`}
              id="fullName"
              placeholder="name"
              {...register("fullName", {
                required: "name  is required",
              })}
            />
            <div className="invalid-feedback">name is required</div>
          </div>
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
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 8,
                  message: "password ",
                },
              })}
            />
            <div className="invalid-feedback">invalid email or password</div>
          </div>

          <button
            className="btn btn-lg btn-primary btn-block"
            disabled={loading}
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
