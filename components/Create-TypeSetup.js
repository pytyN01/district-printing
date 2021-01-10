export default function CreateTypeSetup() {
  return (
    <div className="row mb-3">
      <div className="col-6">
        <div className="row mb-2">
          <div className="col-12">
            <img
              style={{
                height: "50px",
                minHeight: "50px",
              }}
              src="/icon-type.jpg"
              className="img-thumbnail mt-n2"
              alt="Type Icon"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="btn-group" role="group">
              <button
                style={{ paddingLeft: "9.7vw", paddingRight: "9.7vw" }}
                id="typeDropdown"
                type="button"
                className="btn btn-outline-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Job Type
              </button>
              <ul className="dropdown-menu">
                <li>
                  <p className="dropdown-item">Embellishment</p>
                </li>
                <li>
                  <p className="dropdown-item">Direct to Garment</p>
                </li>
                <li>
                  <p className="dropdown-item">Embroidery</p>
                </li>
                <li>
                  <p className="dropdown-item">Plastiso</p>
                </li>
                <li>
                  <p className="dropdown-item">Waterbase/Discharge</p>
                </li>
                <li>
                  <p className="dropdown-item">Other/New</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <textarea
              placeholder="Notes"
              className="form-control mt-2"
              id="typeNotes"
              rows="1"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="row mb-2">
          <div className="col-12">
            <img
              style={{
                height: "50px",
                minHeight: "50px",
              }}
              src="/icon-setup.jpg"
              className="img-thumbnail mt-n2"
              alt="Setup Icon"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              id="setupETC"
              placeholder="Setup, Digi.. etc"
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              id="setupScreens"
              placeholder="Screens"
            />
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              id="setupScreen"
              placeholder="Screen"
            />
          </div>
          <div className="col-12">
            <textarea
              placeholder="Notes"
              className="form-control mt-2"
              id="setupNotes"
              rows="1"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
