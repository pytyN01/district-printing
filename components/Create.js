import CreateArrivalPaymentShip from "./Create-ArrivalPaymentShip";
import CreatePositionColors from "./Create-PositionColors";
import CreateOrderName from "./Create-OrderName";
import CreateTypeSetup from "./Create-TypeSetup";
import CreateProofArt from "./Create-ProofArt";
import CreateProduct from "./CreateProduct";
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
    createdDate: "",
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
    product1: {
      id: "1",
      men: false,
      woman: false,
      youth: false,
      other: false,
      otherName: "",
      pricePerPiece: "",
      tax: false,
      itemNumber: "",
      productType: "",
      color: "",
      additionalDescription: "",
      apparelSource: "",
      XS: "",
      S: "",
      M: "",
      L: "",
      XL: "",
      XXL: "",
      XXXL: "",
      other1: "",
      other1PCS: "",
      other2: "",
      other2PCS: "",
      other3: "",
      other3PCS: "",
      other4: "",
      other4PCS: "",
    },
    product2: {
      id: "2",
      men: false,
      woman: false,
      youth: false,
      other: false,
      otherName: "",
      pricePerPiece: "",
      tax: false,
      itemNumber: "",
      productType: "",
      color: "",
      additionalDescription: "",
      apparelSource: "",
      XS: "",
      S: "",
      M: "",
      L: "",
      XL: "",
      XXL: "",
      XXXL: "",
      other1: "",
      other1PCS: "",
      other2: "",
      other2PCS: "",
      other3: "",
      other3PCS: "",
      other4: "",
      other4PCS: "",
    },
    product3: {
      id: "3",
      men: false,
      woman: false,
      youth: false,
      other: false,
      otherName: "",
      pricePerPiece: "",
      tax: false,
      itemNumber: "",
      productType: "",
      color: "",
      additionalDescription: "",
      apparelSource: "",
      XS: "",
      S: "",
      M: "",
      L: "",
      XL: "",
      XXL: "",
      XXXL: "",
      other1: "",
      other1PCS: "",
      other2: "",
      other2PCS: "",
      other3: "",
      other3PCS: "",
      other4: "",
      other4PCS: "",
    },
    product4: {
      id: "4",
      men: false,
      woman: false,
      youth: false,
      other: false,
      otherName: "",
      pricePerPiece: "",
      tax: false,
      itemNumber: "",
      productType: "",
      color: "",
      additionalDescription: "",
      apparelSource: "",
      XS: "",
      S: "",
      M: "",
      L: "",
      XL: "",
      XXL: "",
      XXXL: "",
      other1: "",
      other1PCS: "",
      other2: "",
      other2PCS: "",
      other3: "",
      other3PCS: "",
      other4: "",
      other4PCS: "",
    },
    product5: {
      id: "5",
      men: false,
      woman: false,
      youth: false,
      other: false,
      otherName: "",
      pricePerPiece: "",
      tax: false,
      itemNumber: "",
      productType: "",
      color: "",
      additionalDescription: "",
      apparelSource: "",
      XS: "",
      S: "",
      M: "",
      L: "",
      XL: "",
      XXL: "",
      XXXL: "",
      other1: "",
      other1PCS: "",
      other2: "",
      other2PCS: "",
      other3: "",
      other3PCS: "",
      other4: "",
      other4PCS: "",
    },
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
