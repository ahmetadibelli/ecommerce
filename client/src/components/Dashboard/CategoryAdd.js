import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addCategory, updateCategory } from "../../actions/categoryActions";

const CategoryAdd = ({ editItem, resetEditItem }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.categoryAdd);
  const { loading: editing, error: editError } = useSelector(
    (state) => state.categoryUpdate
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
  } = useForm();

  useEffect(() => {
    if (editItem) {
      setValue("name", editItem.name);
      setFocus("name");
    }
  }, [editItem, setValue, setFocus]);

  const submitHandler = (data) => {
    // console.log(data);
    if (editItem) {
      dispatch(updateCategory(data, editItem._id));
      resetEditItem();
    } else {
      dispatch(addCategory(data));
    }
    setValue("name", "");
  };
  return (
    <div className="col-md-6">
      <form className="form-signin m-4" onSubmit={handleSubmit(submitHandler)}>
        <h1 className="h3 mb-3 font-weight-normal">
          {" "}
          {editItem ? "Update" : "ADD"} Category
        </h1>
        {(error || editError) && (
          <div className="alert-danger alert">{error || editError}</div>
        )}
        <div className="mb-3">
          <label htmlFor="category-name" className="form-label">
            Category name
          </label>
          <input
            type="text"
            name="name"
            className={`form-control ${
              errors?.name?.message ? "is-invalid" : ""
            }`}
            defaultValue={editItem ? editItem.name : ""}
            id="category-name"
            placeholder="name"
            {...register("name", {
              required: "name is required",
            })}
          />
          <div className="invalid-feedback">{errors?.name?.message}</div>
        </div>

        <button
          disabled={loading || editing}
          className="btn btn-lg btn-primary btn-block"
          type="submit"
        >
          {editItem ? "Update" : "ADD"} Category
        </button>
      </form>
    </div>
  );
};

export default CategoryAdd;
