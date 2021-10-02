import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories, deleteCategory } from "../../actions/categoryActions";

const CategoryList = ({ setEditItem }) => {
  const dispatch = useDispatch();

  const { loading, categories } = useSelector((state) => state.categoryList);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const deleteHandler = (id) => {
    if (window.confirm("Your want to delete this category!")) {
      dispatch(deleteCategory(id));
    }
  };

  let content = <div></div>;
  if (loading) content = <p className="lead">Loading...</p>;

  if (categories.length > 0) {
    content = (
      <ul className="list-group">
        {categories.map((item) => (
          <li
            key={item._id}
            className="list-group-item d-flex align-items-center justify-content-between"
          >
            <span className="mr-auto d-block">{item.name}</span>
            <div className="d-flex align-items-center">
              <button
                onClick={() => setEditItem(item)}
                className="btn btn-primary btn-sm"
              >
                <i className="fas fa-pencil-alt"></i>
              </button>
              <button
                onClick={deleteHandler.bind(null, item._id)}
                className="btn btn-danger mx-1 btn-sm"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  if (!categories.length && !loading) {
    content = <h3>No category found</h3>;
  }

  return (
    <div className="col-md-6">
      <h5>Categories</h5>

      {content}
    </div>
  );
};

export default CategoryList;
