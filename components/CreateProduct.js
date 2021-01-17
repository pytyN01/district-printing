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
                className={num === 0 ? "active" : ""}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className={num === 1 ? "carousel-item active" : "carousel-item"}
              >
                <div className="row">
                  <div className="col-2 mb-2">
                    <h5>Product {num}</h5>
                  </div>
                  <div className="col-4 mb-2 ml-n5">
                    <div className="row">
                      <div className="col-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id={`menCheckbox${num}`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`menCheckbox${num}`}
                          >
                            Men
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id={`womenCheckbox${num}`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`womenCheckbox${num}`}
                          >
                            Woman
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id={`youthCheckbox${num}`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`youthCheckbox${num}`}
                          >
                            Youth
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id={`otherCheckbox${num}`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`otherCheckbox${num}`}
                          >
                            Other
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 mb-2">
                    <div className="row">
                      <div className="col-5 px-1">
                        <input
                          type="text"
                          className="form-control"
                          id={`otherProduct${num}`}
                          placeholder="Other Name"
                        />
                      </div>
                      <div className="col-6 px-1">
                        <input
                          type="text"
                          className="form-control"
                          id={`PPP${num}`}
                          placeholder="Price Per Piece"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-1 mb-2">
                    <div className="form-check ml-n3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id={`taxCheckbox${num}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`taxCheckbox${num}`}
                      >
                        Tax?
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-2 mb-2 pr-1">
                    <input
                      type="text"
                      className="form-control"
                      id={`item${num}`}
                      placeholder="Item #"
                    />
                  </div>
                  <div className="col-2 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id={`teeType${num}`}
                      placeholder="Tee, Pullover, Zipper?"
                    />
                  </div>
                  <div className="col-2 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id={`color${num}`}
                      placeholder="Color"
                    />
                  </div>
                  <div className="col-3 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id={`addDesc${num}`}
                      placeholder="Additional Description"
                    />
                  </div>
                  <div className="col-3 mb-2 pl-1">
                    <div className="dropdown">
                      <button
                        style={{ paddingLeft: "2.6vw", paddingRight: "2.6vw" }}
                        className="btn btn-outline-secondary dropdown-toggle"
                        type="button"
                        id={`apparelDropdown${num}`}
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Apparel Source
                      </button>
                      <ul
                        className="dropdown-menu"
                        style={{
                          height: "140px",
                          overflowY: "auto",
                        }}
                      >
                        <li>
                          <p className="dropdown-item">S&S Activewear</p>
                        </li>
                        <li>
                          <p className="dropdown-item">SanMar</p>
                        </li>
                        <li>
                          <p className="dropdown-item">Pagoda</p>
                        </li>
                        <li>
                          <p className="dropdown-item">Client Provide</p>
                        </li>
                        <li>
                          <p className="dropdown-item">Tans Club</p>
                        </li>
                        <li>
                          <p className="dropdown-item">Amazon</p>
                        </li>
                        <li>
                          <p className="dropdown-item">Other</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id={`size-xs${num}`}
                      placeholder="XS #"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id={`size-s${num}`}
                      placeholder="S #"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id={`size-m${num}`}
                      placeholder="M #"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id={`size-l${num}`}
                      placeholder="L #"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id={`size-xl${num}`}
                      placeholder="XL #"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id={`size-xxl${num}`}
                      placeholder="XXL #"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id={`size-xxxl${num}`}
                      placeholder="XXXL #"
                    />
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col">
                    <div className="row">
                      <div className="col-5">
                        <div className="btn-group dropup">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id={`otherDropdownOne${num}`}
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul
                            className="dropdown-menu"
                            style={{
                              height: "136px",
                              overflowY: "auto",
                            }}
                          >
                            {[
                              "OS",
                              "NB",
                              "6M",
                              "12M",
                              "18M",
                              "24M",
                              "2T",
                              "3T",
                              "5T",
                              "6T",
                              "YXS",
                              "YS",
                              "YM",
                              "YL",
                              "YXL",
                              "YXXL",
                              "YXXXL",
                              "XXS",
                              "3XL",
                              "4XL",
                              "5XL",
                              "6XL",
                              "S/M",
                              "M/L",
                              "L/XL",
                            ].map((size, index) => (
                              <li key={index}>
                                <p className="dropdown-item">{size}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id={`otherInputOne${num}`}
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col-5">
                        <div className="btn-group dropup">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id={`otherDropdownTwo${num}`}
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul
                            className="dropdown-menu"
                            style={{
                              height: "136px",
                              overflowY: "auto",
                            }}
                          >
                            {[
                              "OS",
                              "NB",
                              "6M",
                              "12M",
                              "18M",
                              "24M",
                              "2T",
                              "3T",
                              "5T",
                              "6T",
                              "YXS",
                              "YS",
                              "YM",
                              "YL",
                              "YXL",
                              "YXXL",
                              "YXXXL",
                              "XXS",
                              "3XL",
                              "4XL",
                              "5XL",
                              "6XL",
                              "S/M",
                              "M/L",
                              "L/XL",
                            ].map((size, index) => (
                              <li key={index}>
                                <p className="dropdown-item">{size}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id={`otherInputTwo${num}`}
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col-5">
                        <div className="btn-group dropup">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id={`otherDropdownThree${num}`}
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul
                            className="dropdown-menu"
                            style={{
                              height: "136px",
                              overflowY: "auto",
                            }}
                          >
                            {[
                              "OS",
                              "NB",
                              "6M",
                              "12M",
                              "18M",
                              "24M",
                              "2T",
                              "3T",
                              "5T",
                              "6T",
                              "YXS",
                              "YS",
                              "YM",
                              "YL",
                              "YXL",
                              "YXXL",
                              "YXXXL",
                              "XXS",
                              "3XL",
                              "4XL",
                              "5XL",
                              "6XL",
                              "S/M",
                              "M/L",
                              "L/XL",
                            ].map((size, index) => (
                              <li key={index}>
                                <p className="dropdown-item">{size}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id={`otherInputThree${num}`}
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col-5">
                        <div className="btn-group dropup">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id={`otherDropdownFour${num}`}
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul
                            className="dropdown-menu"
                            style={{
                              height: "136px",
                              overflowY: "auto",
                            }}
                          >
                            {[
                              "OS",
                              "NB",
                              "6M",
                              "12M",
                              "18M",
                              "24M",
                              "2T",
                              "3T",
                              "5T",
                              "6T",
                              "YXS",
                              "YS",
                              "YM",
                              "YL",
                              "YXL",
                              "YXXL",
                              "YXXXL",
                              "XXS",
                              "3XL",
                              "4XL",
                              "5XL",
                              "6XL",
                              "S/M",
                              "M/L",
                              "L/XL",
                            ].map((size, index) => (
                              <li key={index}>
                                <p className="dropdown-item">{size}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id={`otherInputFour${num}`}
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
