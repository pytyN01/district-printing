import React from "react";
import TBody from "./TBody";
import THead from "./THead";
import Sidebar from "./Sidebar";
import Filters from "./Filters";
import Loading from "./Loading";
import Header from "./Header";

export default function Dashboard() {
  const [hidden, setHidden] = React.useState(true);
  const [user, setUser] = React.useState(true);

  React.useEffect(() => {
    const user = localStorage.getItem("name");
    setUser(user);
  }, []);

  const data = [
    {
      id: 1,
      invoice: "#0011001",
      jobName: "Safer Baby Masks",
      apparel: false,
      customer: {
        name: "Ana Marie",
        comment: "Agent - Marza Panther",
      },
      created: "10/23/2020",
      arrival: "10/30/2020",
      status: {
        status: "Revised",
        comment: "Admin - 12/14/2020 20:42",
      },
      printer: {
        name: "Andrew - 11/27/2020",
        comment: "Mid - 11am- 2.5hr",
      },
      art: [
        "https://cdn.shopify.com/s/files/1/1663/2287/products/blank_8a017003-4834-4e04-8979-d18c665db0ed_540x.png",
      ],
      shipping: "",
    },
  ];

  return user ? (
    <React.Fragment>
      <Header hidden={hidden} setHidden={(x) => setHidden(x)} />
      <div className="container-fluid">
        <div className="row mt-0">
          <Sidebar
            hidden={hidden}
            setHidden={(x) => setHidden(x)}
            user={user}
          />
          <main className="ms-sm-auto col-12 px-4" style={{ height: "90vh" }}>
            <Filters
              user={user}
              hidden={hidden}
              setHidden={(x) => setHidden(x)}
            />

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
