import CreateArrivalPaymentShip from "./Create-ArrivalPaymentShip";
import CreatePositionColors from "./Create-PositionColors";
import CreateOrderName from "./Create-OrderName";
import CreateTypeSetup from "./Create-TypeSetup";
import CreateProofArt from "./Create-ProofArt";
import CreateProduct from "./Create-Product";
import CreateSubmit from "./Create-Submit";
import Header from "./Header";

export default function Create() {
  const [state, setState] = React.useState({
    itemID: "",
    invoiceNumber: "",
    invoicePaid: false,
    apparel: false,
    status: "New Order",
    statusEditor: "",
    printer: "",
    printerTime: "",
    createdDate: new Date().toISOString().substr(0, 10),
    arrivalDate: "",
    orderName: "",
    orderCustomer: "Customer Name",
    orderAgent: "Customer Agent",
    orderMultiplePages: false,
    orderType: "Order Type",
    orderTypeNotes: "",
    setup: "",
    setupScreens: "",
    setupScreen: "",
    setupNotes: "",
    proof: [],
    proofNotes: "",
    art: [],
    artLink: "",
    artSize: false,
    artNotes: "",
    positionFront: "",
    positionBack: "",
    positionRightLeft: "",
    positionAdditional: "",
    positionMatchProof: false,
    positionNotes: "",
    colorsColor1: "",
    colorsColor2: "",
    colorsColor3: "",
    colorsColor4: "#000000",
    colorsColor5: "#000000",
    colorsColor6: "#000000",
    colorsMatchProof: false,
    colorsNotes: "",
    arrivalTime: "Est. Arrival Time",
    arrivalRequestDate: "",
    arrivalHardDueDate: false,
    paymentInvoiceUrl: "",
    paymentNotes: "",
    paymentTerms: false,
    shipName: "",
    shipAttn: "",
    shipAddress: "",
    shipState: "",
    shipZipCode: "",
    shipEmail: "",
    shipPhone: "",
    shipPickup: false,
    shipMethod: "Shipping Method",
    shipTrackingUrl: "",
    shipNotes: "",
    shipLabel: "",
    shipPackingList: "",
    //#region P1
    p1Men: false,
    p1Woman: false,
    p1Youth: false,
    p1Other: false,
    p1OtherName: "",
    p1PPP: "",
    p1Tax: false,
    p1ItemNumber: "",
    p1ProductType: "",
    p1Color: "",
    p1AdditionalDescription: "",
    p1ApparelSource: "Apparel Source",
    p1XS: "",
    p1S: "",
    p1M: "",
    p1L: "",
    p1XL: "",
    p1XXL: "",
    p1XXXL: "",
    p1Other1: "Other",
    p1Other1PCS: "",
    p1Other2: "Other",
    p1Other2PCS: "",
    p1Other3: "Other",
    p1Other3PCS: "",
    p1Other4: "Other",
    p1Other4PCS: "",
    //#endregion
    //#region P2
    p2Men: false,
    p2Woman: false,
    p2Youth: false,
    p2Other: false,
    p2OtherName: "",
    p2PPP: "",
    p2Tax: false,
    p2ItemNumber: "",
    p2ProductType: "",
    p2Color: "",
    p2AdditionalDescription: "",
    p2ApparelSource: "Apparel Source",
    p2XS: "",
    p2S: "",
    p2M: "",
    p2L: "",
    p2XL: "",
    p2XXL: "",
    p2XXXL: "",
    p2Other1: "Other",
    p2Other1PCS: "",
    p2Other2: "Other",
    p2Other2PCS: "",
    p2Other3: "Other",
    p2Other3PCS: "",
    p2Other4: "Other",
    p2Other4PCS: "",
    //#endregion
    //#region P3
    p3Men: false,
    p3Woman: false,
    p3Youth: false,
    p3Other: false,
    p3OtherName: "",
    p3PPP: "",
    p3Tax: false,
    p3ItemNumber: "",
    p3ProductType: "",
    p3Color: "",
    p3AdditionalDescription: "",
    p3ApparelSource: "Apparel Source",
    p3XS: "",
    p3S: "",
    p3M: "",
    p3L: "",
    p3XL: "",
    p3XXL: "",
    p3XXXL: "",
    p3Other1: "Other",
    p3Other1PCS: "",
    p3Other2: "Other",
    p3Other2PCS: "",
    p3Other3: "Other",
    p3Other3PCS: "",
    p3Other4: "Other",
    p3Other4PCS: "",
    //#endregion
    //#region P4
    p4Men: false,
    p4Woman: false,
    p4Youth: false,
    p4Other: false,
    p4OtherName: "",
    p4PPP: "",
    p4Tax: false,
    p4ItemNumber: "",
    p4ProductType: "",
    p4Color: "",
    p4AdditionalDescription: "",
    p4ApparelSource: "Apparel Source",
    p4XS: "",
    p4S: "",
    p4M: "",
    p4L: "",
    p4XL: "",
    p4XXL: "",
    p4XXXL: "",
    p4Other1: "Other",
    p4Other1PCS: "",
    p4Other2: "Other",
    p4Other2PCS: "",
    p4Other3: "Other",
    p4Other3PCS: "",
    p4Other4: "Other",
    p4Other4PCS: "",
    //#endregion
    //#region P5
    p5Men: false,
    p5Woman: false,
    p5Youth: false,
    p5Other: false,
    p5OtherName: "",
    p5PPP: "",
    p5Tax: false,
    p5ItemNumber: "",
    p5ProductType: "",
    p5Color: "",
    p5AdditionalDescription: "",
    p5ApparelSource: "Apparel Source",
    p5XS: "",
    p5S: "",
    p5M: "",
    p5L: "",
    p5XL: "",
    p5XXL: "",
    p5XXXL: "",
    p5Other1: "Other",
    p5Other1PCS: "",
    p5Other2: "Other",
    p5Other2PCS: "",
    p5Other3: "Other",
    p5Other3PCS: "",
    p5Other4: "Other",
    p5Other4PCS: "",
    //#endregion
  });

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mt-0">
          <main className="col-12 px-4" style={{ height: "90vh" }}>
            <div className="row mt-4">
              <div className="col">
                <CreateOrderName state={state} setState={(x) => setState(x)} />

                <CreateTypeSetup state={state} setState={(x) => setState(x)} />

                <CreateProofArt state={state} setState={(x) => setState(x)} />

                <CreatePositionColors
                  state={state}
                  setState={(x) => setState(x)}
                />
              </div>

              <div className="col">
                <CreateProduct state={state} setState={(x) => setState(x)} />

                <CreateArrivalPaymentShip
                  state={state}
                  setState={(x) => setState(x)}
                />

                <CreateSubmit state={state} setState={(x) => setState(x)} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
