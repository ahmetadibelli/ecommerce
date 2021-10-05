import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { updateMe } from "../../actions/userActions";
const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.updateUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue("fullName", user.fullName);
    setValue("email", user.email);
  }, [setValue, user]);

  const submitHandler = (data) => {
    console.log(data);
    dispatch(updateMe(data));
  };
  return (
    <div className="col-md-10">
      <form className="form-signin m-4" onSubmit={handleSubmit(submitHandler)}>
        <h1 className="h3 mb-3 font-weight-normal">Profile</h1>

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

        <button
          className="btn btn-lg btn-primary btn-block"
          disabled={loading}
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Profile;
