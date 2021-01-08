export default function CreateName() {
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
          alt="Safer Baby Mask"
        />
      </div>
      <div className="col-2">
        <div className="btn-group ml-n4" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-outline-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Customer Name
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Something Here
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something Here
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something Here
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-6">
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
