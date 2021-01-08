export default function CreateTypeSetup() {
  return (
    <div className="row mb-3">
      <div className="col-sm-6">
        <div className="row">
          <div className="col-12">
            <img
              style={{
                height: "50px",
                minHeight: "50px",
              }}
              src="/icon-type.jpg"
              className="img-thumbnail mt-n2"
              alt="Safer Baby Mask"
            />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-sm-12">
            <div className="btn-group" role="group">
              <button
                style={{ paddingLeft: "9.7vw", paddingRight: "9.7vw" }}
                id="btnGroupDrop1"
                type="button"
                className="btn btn-outline-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Job Type
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
            <textarea
              placeholder="Notes"
              className="form-control mt-2"
              id="exampleFormControlTextarea1"
              rows="2"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="row">
          <div className="col-12">
            <img
              style={{
                height: "50px",
                minHeight: "50px",
              }}
              src="/icon-setup.jpg"
              className="img-thumbnail mt-n2"
              alt="Safer Baby Mask"
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                  placeholder="$Setup, Digi.. etc"
                />
              </div>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                  placeholder="#Screens"
                />
              </div>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                  placeholder="$Screen"
                />
              </div>
              <div className="col-sm-12">
                <textarea
                  placeholder="Notes"
                  className="form-control mt-2"
                  id="exampleFormControlTextarea1"
                  rows="2"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
