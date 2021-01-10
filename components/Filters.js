import { useRouter } from "next/router";
import React from "react";
import AddCustomer from "./Dashboard-Add-Customer";

export default function Filters({ user }) {
  const router = useRouter();

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 border-bottom">
        <div className="btn-toolbar mb-2">
          <div className="input-group p-1">
            <input type="text" className="form-control" placeholder="Search" />
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-outline-success"
                id="search-button"
              >
                Search
              </button>
              <button type="button" className="btn btn-outline-secondary">
                Reset Filters
              </button>
            </div>
          </div>

          <div className="btn-group p-1" role="group">
            <div className="btn-group" role="group">
              <AddCustomer />
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Customer
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

          <div className="btn-group p-1" role="group">
            <button
              type="button"
              onClick={() => router.push("/create")}
              className="btn btn-outline-success"
              id="search-button"
            >
              Create Order
            </button>
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
