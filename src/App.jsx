import { Provider } from "react-redux";
import Cart from "./components/Cart";
import store from "./store";
import ProductCard from "./components/ProductCard";
import products from "./data/product.json";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <h3 className="text-center mt-3 mb-5" id="title">
        React Redux Task
      </h3>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 col-md-7 col-sm-12">
            <div className="row">
              {products.products.map((product) => (
                <div className="col-lg-12 mb-4" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12">
            <Cart />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
