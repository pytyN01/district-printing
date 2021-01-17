import React from "react";

export default function AddPrinter({ arrival }) {
  const [printDate, setPrintDate] = React.useState("");
  const [arrivalDate, setArrivalDate] = React.useState("");

  React.useEffect(() => {
    const date = new Date().toISOString().substr(0, 10);
    setPrintDate(date);
  }, []);

  const [printer, setPrinter] = React.useState("Select Printer");
  const printers = ["Adrian", "Andrew", "Carlos", "Felipe", "Julio"];
  const [schedule, setSchedule] = React.useState("Select Schedule");
  const schedules = [
    "First 8am",
    "Mid 11am",
    "Last 3pm",
    "EOD 5pm",
    "Rush - All Day",
    "Overtime 6pm",
  ];
  const [duration, setDuration] = React.useState("Select Duration");
  const durations = [
    "30min",
    "1 hr",
    "1.5 hr",
    "2 hr",
    "2.5 hr",
    "3 hr",
    "3.5 hr",
    "4 hr",
    "5 hr",
    "6 hr",
    "7 hr",
  ];

  return (
    <>
      <button
        onClick={() =>
          setArrivalDate(new Date(arrival).toISOString().substr(0, 10))
        }
        type="button"
        className="btn btn-lg btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#assignPrinterInfo"
      >
        <i aria-hidden className="far fa-edit"></i>
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
                <i aria-hidden className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row">
                <label className="col-4 col-form-label">Arrival Date</label>
                <div className="col-8">
                  <input
                    onChange={(e) => setArrivalDate(e.target.value)}
                    className="form-control"
                    value={arrivalDate}
                    type="date"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-4 col-form-label">Printer</label>
                <div className="col-8">
                  <div className="btn-group btn-block" role="group">
                    <button
                      className="btn btn-outline-secondary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      type="button"
                    >
                      {printer}
                    </button>
                    <ul className="dropdown-menu">
                      {printers.map((name, index) => (
                        <li key={index}>
                          <p
                            onClick={() => setPrinter(name)}
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

              <div className="mb-3 row">
                <label className="col-4 col-form-label">Print Date</label>
                <div className="col-8">
                  <input
                    onChange={(e) => setPrintDate(e.target.value)}
                    value={printDate}
                    className="form-control"
                    type="date"
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-4 col-form-label">Schedule</label>
                <div className="col-8">
                  <div className="btn-group btn-block" role="group">
                    <button
                      className="btn btn-outline-secondary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      type="button"
                    >
                      {schedule}
                    </button>
                    <ul className="dropdown-menu">
                      {schedules.map((name, index) => (
                        <li key={index}>
                          <p
                            onClick={() => setSchedule(name)}
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

              <div className="mb-3 row">
                <label className="col-4 col-form-label">Duration</label>
                <div className="col-8">
                  <div className="btn-group btn-block" role="group">
                    <button
                      className="btn btn-outline-secondary dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      type="button"
                    >
                      {duration}
                    </button>
                    <ul
                      className="dropdown-menu"
                      style={{ maxHeight: "250px", overflowY: "auto" }}
                    >
                      {durations.map((name, index) => (
                        <li key={index}>
                          <p
                            onClick={() => setDuration(name)}
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
