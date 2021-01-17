export default function AddCustomer() {
  return (
    <>
      <button
        className="btn btn-outline-primary"
        data-bs-target="#staticBackdrop"
        data-bs-toggle="modal"
        type="button"
      >
        Add Customer
      </button>
      <div
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        className="modal fade"
        id="staticBackdrop"
        aria-hidden="true"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add Customer
              </h5>
              <button
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
                type="button"
              >
                <i aria-hidden className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row">
                <label htmlFor="customerName" className="col-2 col-form-label">
                  Name
                </label>
                <div className="col-10">
                  <input
                    className="form-control"
                    id="customerName"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="customerEmail" className="col-2 col-form-label">
                  Email
                </label>
                <div className="col-10">
                  <input
                    className="form-control"
                    id="customerEmail"
                    type="email"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="customerPhone" className="col-2 col-form-label">
                  Phone
                </label>
                <div className="col-10">
                  <input
                    className="form-control"
                    id="customerPhone"
                    type="tel"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  className="col-4 col-form-label"
                  htmlFor="customerAddress"
                >
                  Street Address
                </label>
                <div className="col-8">
                  <input
                    className="form-control"
                    id="customerAddress"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  className="col-4 col-form-label"
                  htmlFor="customerSecondary"
                >
                  Address Line 2
                </label>
                <div className="col-8">
                  <input
                    className="form-control"
                    id="customerSecondary"
                    type="text"
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
                    className="form-control"
                    id="customerCity"
                    type="text"
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
                    className="form-control"
                    id="customerState"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <div className="col-4"></div>
                <label
                  className="col-3 col-form-label"
                  htmlFor="customerZipCode"
                >
                  Zip Code
                </label>
                <div className="col-5">
                  <input
                    className="form-control"
                    id="customerZipCode"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  className="col-4 col-form-label"
                  htmlFor="businessAddress"
                >
                  Street Address
                </label>
                <div className="col-8">
                  <input
                    className="form-control"
                    id="businessAddress"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label
                  className="col-4 col-form-label"
                  htmlFor="businessSecondary"
                >
                  Address Line 2
                </label>
                <div className="col-8">
                  <input
                    className="form-control"
                    id="businessSecondary"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <div className="col-4"></div>
                <label htmlFor="businessCity" className="col-3 col-form-label">
                  City
                </label>
                <div className="col-5">
                  <input
                    className="form-control"
                    id="businessCity"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <div className="col-4"></div>
                <label htmlFor="businessState" className="col-3 col-form-label">
                  State
                </label>
                <div className="col-5">
                  <input
                    className="form-control"
                    id="businessState"
                    type="text"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <div className="col-4"></div>
                <label
                  className="col-3 col-form-label"
                  htmlFor="businessZipCode"
                >
                  Zip Code
                </label>
                <div className="col-5">
                  <input
                    className="form-control"
                    id="businessZipCode"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                type="button"
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
