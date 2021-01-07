import React from "react";

export default function Filters({ hidden, setHidden, user }) {
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="input-group p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-button"
            />
            <div className="btn-group" role="group" aria-label="Set Search">
              <button
                type="button"
                className="btn btn-outline-success"
                id="search-button"
              >
                Search
              </button>
              <button type="button" className="btn btn-outline-danger">
                Reset Filters
              </button>
            </div>
          </div>

          <div
            className="btn-group p-1 d-grid gap-2"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-outline-primary">
                Add Vendor
              </button>
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Vendor
              </button>
              <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
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
          <div className="dropdown p-1">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Print Date
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
                  Something here
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown p-1">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Date Order
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
                  Something here
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown p-1">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Order Status
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
                  Something here
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown p-1">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Printer Name
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
                  Something here
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown p-1">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Status
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
                  Something here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="h2 pb-3 text-muted">
        Welcome Back {capitalize(user)}
        {user !== "Andrew" && " Team"}!
      </h1>
    </React.Fragment>
  );
}
