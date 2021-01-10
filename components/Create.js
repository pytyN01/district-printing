import React from "react";
import Loading from "./Loading";
import Header from "./Header";
import CreateOrderName from "./Create-OrderName";
import CreateProofArt from "./Create-ProofArt";
import CreateTypeSetup from "./Create-TypeSetup";
import CreateProduct from "./CreateProduct";
import CreateArrivalPaymentShip from "./Create-ArrivalPaymentShip";
import CreatePositionColors from "./Create-PositionColors";
import CreateSubmit from "./Create-Submit";
import { useRouter } from "next/router";

export default function Create() {
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
