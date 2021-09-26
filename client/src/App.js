import Pagination from "./components/Pagination/Pagination";
import Products from "./components/Products/Products";
import Layout from "./components/Layout";
function App() {
  return (
    <Layout>
      <Products />
      <Pagination />
    </Layout>
  );
}

export default App;
