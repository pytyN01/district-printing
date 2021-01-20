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

  const [name, setName] = React.useState(null);

  React.useEffect(() => {
    handleArrivalDate(name);
  }, [state.arrivalTime]);

  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setState({ ...state, [name]: newValue });
  };

  const handleFile = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.files[0];
    setState({ ...state, [name]: newValue });
  };

  const handleArrivalTime = (name) => {
    setName(name);
    setState({ ...state, arrivalTime: name });
  };

  const handleArrivalDate = (name) => {
    let time = 0;

    if (name === "7-10 Days") time = 7;
    else if (name === "5 Business Days") time = 5;
    else if (name === "3 Days") time = 3;
    else if (name === "Next Day") time = 1;
    else time = 0;

    if (time >= 1) {
      const date = new Date();
      const newDate = date.setDate(date.getDate() + time);
      const formattedDate = new Date(newDate).toISOString().substr(0, 10);

      setState({ ...state, arrivalDate: formattedDate });
    } else {
      setState({ ...state, arrivalDate: "" });
    }
  };

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
              className="img-thumbnail img50 mt-n2"
              src="/icon-arrival.jpg"
              alt="Arrival Icon"
            />
          </div>
          <div className="col-5">
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
                      onClick={() => handleArrivalTime(name)}
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
                <input
                  onChange={(e) =>
                    setState({ ...state, arrivalDate: e.target.value })
                  }
                  className="form-control"
                  value={state.arrivalDate}
                  type="date"
                />
              </div>
              <div className="col-12">
                <div className="form-check mt-2 mb-3">
                  <input
                    checked={state.arrivalHardDueDate}
                    className="form-check-input"
                    onChange={handleDueCheck}
                    id="arrivalHardDueDate"
                    type="checkbox"
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
              className="img-thumbnail img50 mt-n2"
              src="/icon-payment.jpg"
              alt="Payment Icon"
            />
          </div>
          <div className="col-5">
            <input
              placeholder="Invoice URL"
              onChange={handleChange}
              name="paymentInvoiceUrl"
              className="form-control"
              type="text"
            />
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-12">
                <textarea
                  className="form-control"
                  onChange={handleChange}
                  placeholder="Notes"
                  name="paymentNotes"
                  type="text"
                  rows="1"
                ></textarea>
              </div>
              <div className="col-12">
                <div className="form-check mt-2 mb-3">
                  <input
                    checked={state.paymentTerms}
                    className="form-check-input"
                    onChange={handleTermsCheck}
                    id="paymentTerms"
                    type="checkbox"
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
        <div className="row mb-4">
          <div className="col-6">
            <img
              className="img-thumbnail img50 mt-n2"
              src="/icon-ship.jpg"
              alt="Shipment Icon"
            />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    onChange={handlePickupCheck}
                    checked={state.shipPickup}
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
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row mt-2">
          <div className="col-6">
            <div className="row mb-2">
              <div className="col-6">
                <input
                  className="form-control"
                  onChange={handleChange}
                  placeholder="Name"
                  name="shipName"
                  type="text"
                />
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  onChange={handleChange}
                  placeholder="Attn:"
                  name="shipAttn"
                  type="text"
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-12">
                <input
                  className="form-control"
                  onChange={handleChange}
                  placeholder="Address"
                  name="shipAddress"
                  type="text"
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-6">
                <input
                  className="form-control"
                  onChange={handleChange}
                  placeholder="State"
                  name="shipState"
                  type="text"
                />
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  onChange={handleChange}
                  placeholder="Zip Code"
                  name="shipZipCode"
                  type="text"
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-6">
                <input
                  className="form-control"
                  onChange={handleChange}
                  placeholder="Email"
                  name="shipEmail"
                  type="email"
                />
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  onChange={handleChange}
                  placeholder="Phone"
                  name="shipPhone"
                  type="tel"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row mb-2">
              <div className="col-12 mb-2">
                <input
                  placeholder="Tracking URL"
                  className="form-control"
                  onChange={handleChange}
                  name="shipTrackingUrl"
                  type="text"
                />
              </div>
              <div className="col-12 mb-2">
                <textarea
                  className="form-control"
                  onChange={handleChange}
                  placeholder="Notes"
                  name="shipNotes"
                  type="text"
                  rows="1"
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
                    <input
                      onChange={handleFile}
                      name="shipLabel"
                      type="file"
                      //
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-12">
                    <h6>Packing List</h6>
                  </div>
                  <div className="col-12">
                    <input
                      name="shipPackingList"
                      onChange={handleFile}
                      type="file"
                    />
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
