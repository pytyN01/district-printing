export default function Add() {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add Customer
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add Customer
              </h5>
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                ✖
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row">
                <label htmlFor="customerName" className="col-2 col-form-label">
                  Name
                </label>
                <div className="col-10">
                  <input
                    type="text"
                    className="form-control"
                    id="customerName"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="customerEmail" className="col-2 col-form-label">
                  Email
                </label>
                <div className="col-10">
                  <input
                    type="email"
                    className="form-control"
                    id="customerEmail"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="customerPhone" className="col-2 col-form-label">
                  Phone
                </label>
                <div className="col-10">
                  <input
                    type="tel"
                    className="form-control"
                    id="customerPhone"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  htmlFor="customerAddress"
                  className="col-4 col-form-label"
                >
                  Street Address
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    id="customerAddress"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  htmlFor="customerSecondary"
                  className="col-4 col-form-label"
                >
                  Address Line 2
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    id="customerSecondary"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <div className="col-4"></div>
                <label htmlFor="customerCity" className="col-3 col-form-label">
                  City
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    className="form-control"
                    id="customerCity"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <div className="col-4"></div>
                <label htmlFor="customerState" className="col-3 col-form-label">
                  State
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    className="form-control"
                    id="customerState"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <div className="col-4"></div>
                <label
                  htmlFor="customerZipCode"
                  className="col-3 col-form-label"
                >
                  Zip Code
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    className="form-control"
                    id="customerZipCode"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
