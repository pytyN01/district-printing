export default function CreateCarousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
        ></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://colourlex.com/wp-content/uploads/2017/03/Antimony-orange-painted-swatch-43600-FB.jpg"
            className="d-block w-100"
            alt="orange"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://colourlex.com/wp-content/uploads/2017/03/Phtalocyanine-blue-painted-swatch-23060-FB.jpg"
            className="d-block w-100"
            alt="blue"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://colourlex.com/wp-content/uploads/2017/02/Umbra-gebrannt-40720-B010-FB.jpg"
            className="d-block w-100"
            alt="brown"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://colourlex.com/wp-content/uploads/2016/10/raw-sienna-painted-swatch-FB.jpg"
            className="d-block w-100"
            alt="yellow"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://colourlex.com/wp-content/uploads/2017/04/Pompeiian-red-painted-swatch-40440-FB.jpg"
            className="d-block w-100"
            alt="red"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}
