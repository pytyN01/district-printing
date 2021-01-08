export default function CreateArrivalPaymentShip() {
  return (
    <div className="row mt-n3 mb-3">
      <div className="col-sm-12">
        <div className="row">
          <div className="col-3">
            <img
              style={{
                height: "50px",
                minHeight: "50px",
              }}
              src="/icon-arrival.jpg"
              className="img-thumbnail mt-n2"
              alt="Safer Baby Mask"
            />
          </div>

          <div className="col-4">
            <div className="dropdown">
              <button
                style={{ paddingLeft: "5.1vw", paddingRight: "5.1vw" }}
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                id="dropdownArrival"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                7 - 10 Days
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

          <div className="col-4">
            <div className="row">
              <div className="col-12">
                <div className="dropdown">
                  <button
                    style={{ paddingLeft: "4.3vw", paddingRight: "4.3vw" }}
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    id="dropdownArrivalDate"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Est. Arrival Date
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
              <div className="col-12">
                <div className="form-check my-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="dueDateCheckbox"
                  />
                  <label className="form-check-label" htmlFor="dueDateCheckbox">
                    Hard Due Date
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12  pt-3">
        <div className="row">
          <div className="col-3">
            <img
              style={{
                height: "50px",
                minHeight: "50px",
              }}
              src="/icon-payment.jpg"
              className="img-thumbnail mt-n2"
              alt="Safer Baby Mask"
            />
          </div>

          <div className="col-4">
            <input
              placeholder="Invoice URL"
              type="text"
              className="form-control"
            />
          </div>

          <div className="col-4">
            <div className="row">
              <div className="col-12">
                <input
                  placeholder="Notes"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-12">
                <div className="form-check my-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="termsCheckbox"
                  />
                  <label className="form-check-label" htmlFor="termsCheckbox">
                    Terms
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12 pt-3">
        <div className="row">
          <div className="col-12 mb-3">
            <img
              style={{
                height: "50px",
                minHeight: "50px",
              }}
              src="/icon-ship.jpg"
              className="img-thumbnail mt-n2"
              alt="Safer Baby Mask"
            />
          </div>
          <div className="col-12 mb-3">
            <div className="row mt-2">
              <div className="col-6">
                <div className="row mb-2">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Attn:"
                    />
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip Code"
                    />
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 mt-n4">
                <div className="row mb-2">
                  <div className="col-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="pickupCheckbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="pickupCheckbox"
                      >
                        Pickup
                      </label>
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="dropdown">
                      <button
                        style={{ paddingLeft: "6vw", paddingRight: "6vw" }}
                        className="btn btn-outline-secondary dropdown-toggle"
                        type="button"
                        id="dropdownPickup"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Shipping Method
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
                </div>

                <div className="row mb-2">
                  <div className="col-12 mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tracking URL"
                    />
                  </div>
                  <div className="col-12 mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Notes"
                    />
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-12">
                        <h6>Shipping Label</h6>
                      </div>
                      <div className="col-12">
                        <input type="file" id="shippingLabel" />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-12">
                        <h6>Packing List</h6>
                      </div>
                      <div className="col-12">
                        <input type="file" id="packingList" />
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
