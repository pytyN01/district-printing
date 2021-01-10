export default function CreateName() {
  const customers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="row mb-3">
      <div className="col-2">
        <img
          style={{
            height: "40px",
            minHeight: "40px",
          }}
          src="/icon-job.jpg"
          className="img-thumbnail"
          alt="Job Icon"
        />
      </div>
      <div className="col-3">
        <div className="btn-group ml-n2" role="group">
          <button
            style={{ paddingLeft: "1.8vw", paddingRight: "1.8vw" }}
            id="customerDropdown"
            type="button"
            className="btn btn-outline-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Customer Name
          </button>
          <ul className="dropdown-menu">
            {customers.map((customer, index) => (
              <li key={index}>
                <p className="dropdown-item">Customer {customer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-5">
        <input
          type="text"
          className="form-control"
          id="orderName"
          placeholder="Order Name"
        />
      </div>
      <div className="col-2">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" />
          <label className="form-check-label">Multiple Pages</label>
        </div>
      </div>
    </div>
  );
}
