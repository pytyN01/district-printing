import React from "react";
import { useRouter } from "next/router";

export default function Header({ hidden, setHidden }) {
  const router = useRouter();

  const signOut = () => {
    localStorage.setItem("name", null);
    router.push("/");
  };

  return (
    <React.Fragment>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
          {hidden && (
            <button
              type="button"
              onClick={() => setHidden(!hidden)}
              className="btn btn-outline-secondary ml-2"
            >
              ⚙
            </button>
          )}
          <span className="ml-2">District Printing & Embroidery, INC</span>
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="navbar-nav p-3">
          <li className="nav-item text-nowrap">
            <a
              onClick={signOut}
              className="text-white text-decoration-none h6"
              href="#"
            >
              Sign out
            </a>
          </li>
        </ul>
      </header>
    </React.Fragment>
  );
}
