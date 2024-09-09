import { useDispatch } from "react-redux";
import { addToCart } from "../reducers/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className="card h-100">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="card-img-top"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text ">{product.description}</p>
        <div className="mt-auto d-flex justify-content-end ">
          <div className="btn-group dropright">
            <button type="button" className="btn btn-price btn-block">
              ${product.price}
            </button>
            <button
              type="submit"
              className="btn btn-warning btn-block  dropdown-toggle-split"
              onClick={handleAddToCart}
            >
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
