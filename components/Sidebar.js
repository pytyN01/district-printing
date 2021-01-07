import React from "react";
import { useRouter } from "next/router";

export default function Sidebar({ user, hidden, setHidden }) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <React.Fragment>
      {!hidden && (
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse pt-0"
        >
          <div className="mt-5" />
          <button
            onClick={() => setHidden(!hidden)}
            className="btn btn-outline-secondary ml-3 mt-4"
          >
            Close Sidebar
          </button>
          <div className="position-sticky pt-0">
            <ul className="nav flex-column mb-2 pt-3">
              <li className="nav-item">
                <a
                  className={
                    path === "/dashboard" ? "nav-link active" : "nav-link"
                  }
                  href="/dashboard"
                >
                  <span data-feather="home"></span>
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    path === "/create" ? "nav-link active" : "nav-link"
                  }
                  href="/create"
                >
                  <span data-feather="layers"></span>
                  Create Order
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={path === "/open" ? "nav-link active" : "nav-link"}
                  href="/open"
                >
                  <span data-feather="layers"></span>
                  Open Orders
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    path === "/completed" ? "nav-link active" : "nav-link"
                  }
                  href="/completed"
                >
                  <span data-feather="layers"></span>
                  Completed Orders
                </a>
              </li>
              {user === "Andrew" && (
                <React.Fragment>
                  <li className="nav-item">
                    <a
                      className={
                        path === "/admin1" ? "nav-link active" : "nav-link"
                      }
                      href="#"
                    >
                      <span data-feather="file"></span>
                      Admin Menu 1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={
                        path === "/admin2" ? "nav-link active" : "nav-link"
                      }
                      href="#"
                    >
                      <span data-feather="shopping-cart"></span>
                      Admin Menu 2
                    </a>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </nav>
      )}{" "}
    </React.Fragment>
  );
}
