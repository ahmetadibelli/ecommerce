import { Switch, Route } from "react-router-dom";
import Pagination from "./components/Pagination/Pagination";
import Products from "./components/Products/Products";
import Layout from "./components/Layout";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route
          path="/"
          render={() => (
            <>
              <Products />
              <Pagination />
            </>
          )}
        />
      </Switch>
    </Layout>
  );
}

export default App;
