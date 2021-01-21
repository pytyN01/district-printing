import Filters from "./Filters";
import Header from "./Header";
import TBody from "./TBody";
import THead from "./THead";
import React from "react";

import { useRouter } from "next/router";

export default function Dashboard({ data }) {
  const router = useRouter();

  React.useEffect(() => {
    const loggedIN = localStorage.getItem("name");
    if (!loggedIN) router.push("/");
    else if (loggedIN === "null") router.push("/");
  }, []);

  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row mt-0">
          <main className="col-12 px-4" style={{ height: "90vh" }}>
            <Filters />

            <div className="table-responsive">
              <table className="table table-bordered table-striped table-hover table-sm">
                <THead />

                <tbody>
                  <TBody data={data} />
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
