import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import CategoryList from "./CategoryList";
import CategoryAdd from "./CategoryAdd";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [editItem, setEditItem] = useState(null);
  const isAdmin = user?.role === 1;
  if (!isAdmin) return <Redirect to="/" />;
  return (
    <div className="row">
      <CategoryList setEditItem={setEditItem} />
      <CategoryAdd
        resetEditItem={() => setEditItem(null)}
        editItem={editItem}
      />
    </div>
  );
};

export default Dashboard;
