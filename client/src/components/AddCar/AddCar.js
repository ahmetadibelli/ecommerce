import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getCategories } from "../../actions/categoryActions";
import { addCar } from "../../actions/carActions";

const AddCar = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.addCar);
  const { categories, loading: fetchingCat } = useSelector(
    (state) => state.categoryList
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const clearInput = () => {
    setValue("name", "");
    setValue("category", "");
    setValue("price", "");
    setValue("image", "");
    setValue("mileage", "");
    setValue("location", "");
    setValue("brand", "");
  };

  const submitHandler = (data) => {
    dispatch(addCar(data, clearInput));
  };
  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <form
          className="form-signin m-4"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h1 className="h3 mb-3 font-weight-normal">Add Car</h1>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className={`form-control ${
                errors?.name?.message ? "is-invalid" : ""
              }`}
              id="name"
              placeholder="name"
              {...register("name", {
                required: "name  is required",
              })}
            />
            <div className="invalid-feedback">name is required</div>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              name="price"
              className={`form-control ${
                errors?.price?.message ? "is-invalid" : ""
              }`}
              id="price"
              placeholder="$99"
              {...register("price", {
                required: "price is required",
              })}
            />
            <div className="invalid-feedback">Price is required</div>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Category
            </label>
            <select
              disabled={fetchingCat}
              className={`form-select ${
                errors?.category?.message ? "is-invalid" : ""
              }`}
              aria-label="Default select example"
              {...register("category", { required: "category is required" })}
            >
              {fetchingCat && <option>Fetching...</option>}
              {categories.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">Category is required</div>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              className={`form-control ${
                errors?.brand?.message ? "is-invalid" : ""
              }`}
              id="brand"
              placeholder="Brand"
              {...register("brand", {
                required: "Brand is required",
              })}
            />
            <div className="invalid-feedback">Brand is required</div>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input
              type="text"
              name="image"
              className={`form-control ${
                errors?.image?.message ? "is-invalid" : ""
              }`}
              id="image"
              placeholder="image URL"
              {...register("image", {
                required: "image is required",
              })}
            />
            <div className="invalid-feedback">image is required</div>
          </div>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">
              Location
            </label>
            <input
              type="text"
              name="location"
              className={`form-control ${
                errors?.location?.message ? "is-invalid" : ""
              }`}
              id="location"
              placeholder="location"
              {...register("location", {
                required: "Location is required",
              })}
            />
            <div className="invalid-feedback">Location is required</div>
          </div>
          <div className="mb-3">
            <label htmlFor="comment" className="form-label">
              Mileage
            </label>
            <input
              type="number"
              name="mileage"
              className={`form-control ${
                errors?.mileage?.message ? "is-invalid" : ""
              }`}
              id="mileage"
              placeholder="mileage"
              {...register("mileage", {
                required: "mileage is required",
              })}
            />
            <div className="invalid-feedback">mileage is required</div>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block"
            disabled={loading}
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
