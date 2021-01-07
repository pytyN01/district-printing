export default function CreateProduct() {
  return (
    <div className="mb-3 row">
      <div className="col-sm-12 px-3">
        <img
          style={{
            height: "50px",
            minHeight: "50px",
          }}
          src="/icon-product.jpg"
          className="img-thumbnail mt-n2"
          alt="Safer Baby Mask"
        />
      </div>

      <div className="col-sm-12 px-3 mt-3">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="false"
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
              <div className="d-block w-100">
                <div className="row">
                  <div className="col-sm-2 mb-2">
                    <h5>Product 1</h5>
                  </div>
                  <div className="col-sm-4 mb-2 ml-n4">
                    <div className="row">
                      <div className="col-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="menCheckbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="menCheckbox"
                          >
                            Men
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="womanCheckbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="womanCheckbox"
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
                            id="youthCheckbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="youthCheckbox"
                          >
                            Youth
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 mb-2 ml-n3">
                    <div className="row">
                      <div className="col-sm-2 form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="otherProductCheckbox"
                        />
                      </div>
                      <div className="col-sm-4 px-1 ml-n4">
                        <input
                          type="text"
                          className="form-control"
                          id="otherProductOne"
                          placeholder="Other"
                        />
                      </div>
                      <div className="col-sm-6 px-1">
                        <input
                          type="text"
                          className="form-control"
                          id="PPP1"
                          placeholder="Price Per Piece"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-1 mb-2">
                    <div className="form-check ml-n3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="textCheckbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="textCheckbox"
                      >
                        Text?
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-2 mb-2 pr-1">
                    <input
                      type="text"
                      className="form-control"
                      id="Item#"
                      placeholder="Item #"
                    />
                  </div>
                  <div className="col-sm-2 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id="Zip"
                      placeholder="Tee, Pullover, Zip?"
                    />
                  </div>
                  <div className="col-sm-2 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id="Color"
                      placeholder="Color"
                    />
                  </div>
                  <div className="col-sm-3 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id="AddDesc"
                      placeholder="Additional Description"
                    />
                  </div>
                  <div className="col-sm-3 mb-2 pl-1">
                    <div className="dropdown">
                      <button
                        className="btn btn-outline-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Apparel Source
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Something here
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something here
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 mb-2 pl-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XS
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      S
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      M
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      L
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XL
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XXL
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XXXL
                    </button>
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-sm-3 mb-2 pr-1">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherOne"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputOne1"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 mb-2 px-1 ml-n2">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherTwo"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputTwo1"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 mb-2 px-1 ml-n2">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherThree"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputThree1"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 mb-2 pl-1 ml-n3">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherFour"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputFour1"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-block w-100">
                <div className="row">
                  <div className="col-sm-2 mb-2">
                    <h5>Product 2</h5>
                  </div>
                  <div className="col-sm-4 mb-2 ml-n4">
                    <div className="row">
                      <div className="col-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="menCheckbox2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="menCheckbox2"
                          >
                            Men
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="womanCheckbox2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="womanCheckbox2"
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
                            id="youthCheckbox2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="youthCheckbox2"
                          >
                            Youth
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 mb-2 ml-n3">
                    <div className="row">
                      <div className="col-sm-2 form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="otherProductCheckbox2"
                        />
                      </div>
                      <div className="col-sm-4 px-1 ml-n4">
                        <input
                          type="text"
                          className="form-control"
                          id="otherProductOne2"
                          placeholder="Other"
                        />
                      </div>
                      <div className="col-sm-6 px-1">
                        <input
                          type="text"
                          className="form-control"
                          id="PPP2"
                          placeholder="Price Per Piece"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-1 mb-2">
                    <div className="form-check ml-n3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="textCheckbox2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="textCheckbox2"
                      >
                        Text?
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-2 mb-2 pr-1">
                    <input
                      type="text"
                      className="form-control"
                      id="Item#2"
                      placeholder="Item #"
                    />
                  </div>
                  <div className="col-sm-2 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id="Zip2"
                      placeholder="Tee, Pullover, Zip?"
                    />
                  </div>
                  <div className="col-sm-2 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id="Color2"
                      placeholder="Color"
                    />
                  </div>
                  <div className="col-sm-3 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id="AddDesc2"
                      placeholder="Additional Description"
                    />
                  </div>
                  <div className="col-sm-3 mb-2 pl-1">
                    <div className="dropdown">
                      <button
                        className="btn btn-outline-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Apparel Source
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Something here
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something here
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 mb-2 pl-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XS
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      S
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      M
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      L
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XL
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XXL
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XXXL
                    </button>
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-sm-3 mb-2 pr-1">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherOne"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputOne2"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 mb-2 px-1 ml-n2">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherTwo"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputTwo2"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 mb-2 px-1 ml-n2">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherThree"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputThree2"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 mb-2 pl-1 ml-n3">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherFour"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputFour2"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-block w-100">
                <div className="row">
                  <div className="col-sm-2 mb-2">
                    <h5>Product 3</h5>
                  </div>
                  <div className="col-sm-4 mb-2 ml-n4">
                    <div className="row">
                      <div className="col-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="menCheckbox3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="menCheckbox3"
                          >
                            Men
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="womanCheckbox3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="womanCheckbox3"
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
                            id="youthCheckbox3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="youthCheckbox3"
                          >
                            Youth
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 mb-2 ml-n3">
                    <div className="row">
                      <div className="col-sm-2 form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="otherProductCheckbox3"
                        />
                      </div>
                      <div className="col-sm-4 px-1 ml-n4">
                        <input
                          type="text"
                          className="form-control"
                          id="otherProductOne3"
                          placeholder="Other"
                        />
                      </div>
                      <div className="col-sm-6 px-1">
                        <input
                          type="text"
                          className="form-control"
                          id="PPP3"
                          placeholder="Price Per Piece"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-1 mb-2">
                    <div className="form-check ml-n3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="textCheckbox3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="textCheckbox3"
                      >
                        Text?
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-2 mb-2 pr-1">
                    <input
                      type="text"
                      className="form-control"
                      id="Item#3"
                      placeholder="Item #"
                    />
                  </div>
                  <div className="col-sm-2 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id="Zip3"
                      placeholder="Tee, Pullover, Zip?"
                    />
                  </div>
                  <div className="col-sm-2 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id="Color#"
                      placeholder="Color"
                    />
                  </div>
                  <div className="col-sm-3 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id="AddDesc3"
                      placeholder="Additional Description"
                    />
                  </div>
                  <div className="col-sm-3 mb-2 pl-1">
                    <div className="dropdown">
                      <button
                        className="btn btn-outline-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Apparel Source
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Something here
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something here
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 mb-2 pl-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XS
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      S
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      M
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      L
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XL
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XXL
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XXXL
                    </button>
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-sm-3 mb-2 pr-1">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherOne"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputOne3"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 mb-2 px-1 ml-n2">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherTwo"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputTwo3"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 mb-2 px-1 ml-n2">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherThree"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputThree3"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 mb-2 pl-1 ml-n3">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherFour"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputFour3"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-block w-100">
                <div className="row">
                  <div className="col-sm-2 mb-2">
                    <h5>Product 4</h5>
                  </div>
                  <div className="col-sm-4 mb-2 ml-n4">
                    <div className="row">
                      <div className="col-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="menCheckbox4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="menCheckbox4"
                          >
                            Men
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="womanCheckbox4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="womanCheckbox4"
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
                            id="youthCheckbox4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="youthCheckbox4"
                          >
                            Youth
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 mb-2 ml-n3">
                    <div className="row">
                      <div className="col-sm-2 form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="otherProductCheckbox4"
                        />
                      </div>
                      <div className="col-sm-4 px-1 ml-n4">
                        <input
                          type="text"
                          className="form-control"
                          id="otherProductOne4"
                          placeholder="Other"
                        />
                      </div>
                      <div className="col-sm-6 px-1">
                        <input
                          type="text"
                          className="form-control"
                          id="PPP4"
                          placeholder="Price Per Piece"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-1 mb-2">
                    <div className="form-check ml-n3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="textCheckbox4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="textCheckbox4"
                      >
                        Text?
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-2 mb-2 pr-1">
                    <input
                      type="text"
                      className="form-control"
                      id="Item#4"
                      placeholder="Item #"
                    />
                  </div>
                  <div className="col-sm-2 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id="Zip4"
                      placeholder="Tee, Pullover, Zip?"
                    />
                  </div>
                  <div className="col-sm-2 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id="Color4"
                      placeholder="Color"
                    />
                  </div>
                  <div className="col-sm-3 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id="AddDesc4"
                      placeholder="Additional Description"
                    />
                  </div>
                  <div className="col-sm-3 mb-2 pl-1">
                    <div className="dropdown">
                      <button
                        className="btn btn-outline-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Apparel Source
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Something here
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something here
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 mb-2 pl-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XS
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      S
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      M
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      L
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XL
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XXL
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XXXL
                    </button>
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-sm-3 mb-2 pr-1">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherOne"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputOne4"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 mb-2 px-1 ml-n2">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherTwo"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputTwo4"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 mb-2 px-1 ml-n2">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherThree"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputThree4"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 mb-2 pl-1 ml-n3">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherFour"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputFour4"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-block w-100">
                <div className="row">
                  <div className="col-sm-2 mb-2">
                    <h5>Product 5</h5>
                  </div>
                  <div className="col-sm-4 mb-2 ml-n4">
                    <div className="row">
                      <div className="col-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="menCheckbox5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="menCheckbox5"
                          >
                            Men
                          </label>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="womanCheckbox5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="womanCheckbox5"
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
                            id="youthCheckbox5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="youthCheckbox5"
                          >
                            Youth
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 mb-2 ml-n3">
                    <div className="row">
                      <div className="col-sm-2 form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="otherProductCheckbox5"
                        />
                      </div>
                      <div className="col-sm-4 px-1 ml-n4">
                        <input
                          type="text"
                          className="form-control"
                          id="otherProductOne5"
                          placeholder="Other"
                        />
                      </div>
                      <div className="col-sm-6 px-1">
                        <input
                          type="text"
                          className="form-control"
                          id="PPP5"
                          placeholder="Price Per Piece"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-1 mb-2">
                    <div className="form-check ml-n3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="textCheckbox5"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="textCheckbox5"
                      >
                        Text?
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-2 mb-2 pr-1">
                    <input
                      type="text"
                      className="form-control"
                      id="Item#5"
                      placeholder="Item #"
                    />
                  </div>
                  <div className="col-sm-2 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id="Zip5"
                      placeholder="Tee, Pullover, Zip?"
                    />
                  </div>
                  <div className="col-sm-2 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id="Color5"
                      placeholder="Color"
                    />
                  </div>

                  <div className="col-sm-3 mb-2 px-1">
                    <input
                      type="text"
                      className="form-control"
                      id="AddDesc5"
                      placeholder="Additional Description"
                    />
                  </div>
                  <div className="col-sm-3 mb-2 pl-1">
                    <div className="dropdown">
                      <button
                        className="btn btn-outline-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Apparel Source
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Something here
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something here
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 mb-2 pl-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XS
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      S
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      M
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      L
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XL
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XXL
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-secondary mx-2"
                      style={{
                        paddingLeft: "2.2rem",
                        paddingRight: "2.2rem",
                      }}
                    >
                      XXXL
                    </button>
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-sm-3 mb-2 pr-1">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherOne"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputOne5"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 mb-2 px-1 ml-n2">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherTwo"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputTwo5"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 mb-2 px-1 ml-n2">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherThree"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputThree5"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 mb-2 pl-1 ml-n3">
                    <div className="row">
                      <div className="col-5">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="otherFour"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Other
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <input
                          type="text"
                          className="form-control"
                          id="otherInputFour5"
                          placeholder="PCS"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
