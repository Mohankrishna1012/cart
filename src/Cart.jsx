import { StarFill } from "react-bootstrap-icons";

const Cart = ({ handleRemoveitem, product, cartitem, handleAddtocart }) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div
          className={
            product.sale ? "badge bg-dark text-white position-absolute" : ""
          }
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          {product.sale}
        </div>

        <img className="card-img-top" src={product.img} alt="..." />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.title}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              <div>{product.rating ? <StarFill /> : ""}</div>
              <div>{product.rating ? <StarFill /> : ""}</div>
              <div>{product.rating ? <StarFill /> : ""}</div>
              <div>{product.rating ? <StarFill /> : ""}</div>
              <div>{product.rating ? <StarFill /> : ""}</div>
            </div>
            <span
              className={
                product.oldprice
                  ? "text-muted text-decoration-line-through"
                  : ""
              }
            >
              {product.oldprice}
            </span>
            &#36;{product.newprice}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {cartitem.some((item) => item.id === product.id) ? (
              <button
                onClick={() => handleRemoveitem(product)}
                className="btn btn-outline-dark mt-auto"
              >
                Remove to cart
              </button>
            ) : (
              <button
                onClick={() => handleAddtocart(product)}
                className="btn btn-outline-dark mt-auto"
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
