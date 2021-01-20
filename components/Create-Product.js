import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from "./Product3";
import Product4 from "./Product4";
import Product5 from "./Product5";

export default function CreateProduct({ state, setState }) {
  return (
    <div className="row mb-3">
      <div className="col">
        <img
          className="img-thumbnail img50 mt-n2"
          src="/icon-product.jpg"
          alt="Product Icon"
        />
      </div>

      <div className="col-12 mt-3">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="false"
        >
          <ol className="carousel-indicators">
            {[0, 1, 2, 3, 4].map((num) => (
              <li
                key={num}
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={num}
                className={num === 0 ? "active" : "addIcon"}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Product1 state={state} setState={(x) => setState(x)} />
            </div>
            <div className="carousel-item">
              <Product2 state={state} setState={(x) => setState(x)} />
            </div>
            <div className="carousel-item">
              <Product3 state={state} setState={(x) => setState(x)} />
            </div>
            <div className="carousel-item">
              <Product4 state={state} setState={(x) => setState(x)} />
            </div>
            <div className="carousel-item">
              <Product5 state={state} setState={(x) => setState(x)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
