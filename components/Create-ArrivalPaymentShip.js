import React from "react";

export default function CreateArrivalPaymentShip({ state, setState }) {
  const shipping = ["FedEx", "USPS - US Postal", "UPS", "DHL"];
  const arrival = [
    "7-10 Days",
    "5 Business Days",
    "3 Days",
    "Next Day",
    "Custom",
  ];

  const handleDueCheck = () => {
    setState({ ...state, arrivalHardDueDate: !state.arrivalHardDueDate });
  };

  const handleTermsCheck = () => {
    setState({ ...state, paymentTerms: !state.paymentTerms });
  };

  const handlePickupCheck = () => {
    setState({ ...state, shipPickup: !state.shipPickup });
  };

  return (
    <div className="row mb-3">
      <div className="col-12">
        <div className="row">
          <div className="col-3">
            <img
              src="/icon-arrival.jpg"
              className="img-thumbnail img50 mt-n2"
              alt="Arrival Icon"
            />
          </div>

          <div className="col-4">
            <div className="btn-group btn-block" role="group">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                type="button"
              >
                {state.arrivalTime}
              </button>
              <ul className="dropdown-menu">
                {arrival.map((name, index) => (
                  <li key={index}>
                    <p
                      onClick={() => setState({ ...state, arrivalTime: name })}
                      className="dropdown-item pointer"
                    >
                      {name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-4">
            <div className="row">
              <div className="col-12">
                <input type="date" className="form-control" id="arrivalDate" />
              </div>
              <div className="col-12">
                <div className="form-check my-2">
                  <input
                    checked={state.arrivalHardDueDate}
                    className="form-check-input"
                    onChange={handleDueCheck}
                    type="checkbox"
                    id="arrivalHardDueDate"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="arrivalHardDueDate"
                  >
                    Hard Due Date
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-3">
            <img
              src="/icon-payment.jpg"
              className="img-thumbnail img50 mt-n2"
              alt="Payment Icon"
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
                <textarea
                  rows="1"
                  className="form-control"
                  placeholder="Notes"
                  type="text"
                  id="paymentNotes"
                ></textarea>
              </div>
              <div className="col-12">
                <div className="form-check my-2">
                  <input
                    checked={state.paymentTerms}
                    className="form-check-input"
                    onChange={handleTermsCheck}
                    type="checkbox"
                    id="paymentTerms"
                  />
                  <label className="form-check-label" htmlFor="paymentTerms">
                    Terms
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-12 mb-3">
            <img
              src="/icon-ship.jpg"
              className="img-thumbnail img50 mt-n2"
              alt="Shipment Icon"
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
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 mt-n5">
                <div className="row mb-2">
                  <div className="col-2">
                    <div className="form-check">
                      <input
                        checked={state.shipPickup}
                        className="form-check-input"
                        onChange={handlePickupCheck}
                        type="checkbox"
                        id="shipPickup"
                      />
                      <label className="form-check-label" htmlFor="shipPickup">
                        Pickup
                      </label>
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="btn-group btn-block" role="group">
                      <button
                        className="btn btn-outline-secondary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        type="button"
                      >
                        {state.shipMethod}
                      </button>
                      <ul className="dropdown-menu">
                        {shipping.map((name, index) => (
                          <li key={index}>
                            <p
                              onClick={() =>
                                setState({ ...state, shipMethod: name })
                              }
                              className="dropdown-item pointer"
                            >
                              {name}
                            </p>
                          </li>
                        ))}
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
                    <textarea
                      rows="1"
                      className="form-control"
                      placeholder="Notes"
                      type="text"
                      id="shippingNotes"
                    ></textarea>
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
