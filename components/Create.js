import React from "react";
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import Header from "./Header";
import CreateOrderName from "./Create-OrderName";
import CreateProofArt from "./Create-ProofArt";
import CreateTypeSetup from "./Create-TypeSetup";
import CreateProduct from "./CreateProduct";
import CreateArrivalPaymentShip from "./Create-ArrivalPaymentShip";
import CreatePositionColors from "./Create-PositionColors";
import CreateSubmit from "./Create-Submit";

export default function Create() {
  const [hidden, setHidden] = React.useState(true);
  const [user, setUser] = React.useState(true);

  // const { user, handleSetUser } = React.useContext(Context);

  React.useEffect(() => {
    const user = localStorage.getItem("name");
    setUser(user);
  }, []);

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
          <main
            className={
              hidden
                ? "ms-sm-auto col-md-12 px-md-4"
                : "ms-sm-auto col-md-10 px-md-4"
            }
            style={{ height: "90vh" }}
          >
            <div className="row mt-4">
              <div className="col">
                <CreateOrderName />

                <CreateTypeSetup />

                <CreateProofArt />

                <CreatePositionColors />
              </div>

              <div className="col">
                <CreateProduct />

                <CreateArrivalPaymentShip />

                <CreateSubmit />
              </div>
            </div>
          </main>
        </div>
      </div>
    </React.Fragment>
  ) : (
    <Loading />
  );
}
