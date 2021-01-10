export default function AddPrinter() {
  return (
    <>
      <button
        type="button"
        className="btn btn-lg btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#assignPrinterInfo"
      >
        <i className="far fa-edit"></i>
      </button>
      <div
        className="modal fade"
        id="assignPrinterInfo"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="assignPrinterInfoLabel">
                Assign Printer
              </h5>
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row">
                <label htmlFor="printerName" className="col-2 col-form-label">
                  Name
                </label>
                <div className="col-10">
                  <input
                    type="text"
                    className="form-control"
                    id="printerName"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="printerNotes" className="col-2 col-form-label">
                  Notes
                </label>
                <div className="col-10">
                  <textarea
                    type="text"
                    className="form-control"
                    id="printerNotes"
                    row="3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
