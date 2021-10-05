import { Switch, Route } from "react-router-dom";
import Pagination from "./components/Pagination/Pagination";
import Cars from "./components/Cars/Cars";
import Layout from "./components/Layout";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Dashboard from "./components/Dashboard/Dashboard";
import AddCar from "./components/AddCar/AddCar";
import Profile from "./components/Profile";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add-car" component={AddCar} />
        <Route path="/profile" component={Profile} />
        <Route path="/cart" component={Cart} />
        <Route
          path="/"
          render={() => (
            <>
              <Cars />
              <Pagination />
            </>
          )}
        />
      </Switch>
    </Layout>
  );
}

export default App;
