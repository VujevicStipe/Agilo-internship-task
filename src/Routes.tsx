import { Route, Routes, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Layout from "./layout/Layout";
import ProductsPage from "./routes/ProductsPage";
import ProductDetailsPage from "./routes/ProductDetailsPage";
import ScrollToTop from "./util/ScrollToTop";

function Root() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route
            path="/product/:id"
            element={<ProductDetailsPage />}
          />
        </Route>
      </Routes>
    </>
  );
}
const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default router;
