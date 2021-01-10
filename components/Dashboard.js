import { useRouter } from "next/router";
import Filters from "./Filters";
import Loading from "./Loading";
import Header from "./Header";
import TBody from "./TBody";
import THead from "./THead";
import React from "react";

export default function Dashboard({ data }) {
  const [user, setUser] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
    const user = localStorage.getItem("name");
    if (user === "null") router.push("/");
    else setUser(user);
  }, []);

  return user ? (
    <React.Fragment>
      <Header />
      <div className="container-fluid">
        <div className="row mt-0">
          <main className="col-12 px-4" style={{ height: "90vh" }}>
            <Filters user={user} />

            <div className="table-responsive">
              <table className="table table-bordered table-striped table-hover  table-sm">
                <THead user={user} />
                <tbody>
                  <TBody data={data} user={user} />
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </React.Fragment>
  ) : (
    <Loading />
  );
}
