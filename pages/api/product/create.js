import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  db.collection("products").insertOne({
    apparel: false,
    arrivalDate: "01/28/2021",
    arrivalHardDueDate: false,
    arrivalTime: "7-10 Days",
    art: [
      "https://cdn.shopify.com/s/files/1/1663/2287/products/blank_8a017003-4834-4e04-8979-d18c665db0ed_540x.png",
    ],
    artLink:
      "https://cdn.shopify.com/s/files/1/1663/2287/products/blank_8a017003-4834-4e04-8979-d18c665db0ed_540x.png",
    artNotes: "Art Notes Here",
    artSize: false,
    colorsColor1: "#000000",
    colorsColor2: "#000000",
    colorsColor3: "#000000",
    colorsColor4: "#000000",
    colorsColor5: "#000000",
    colorsColor6: "#000000",
    colorsMatchProof: false,
    colorsNotes: "Color Notes",
    createdDate: "01/21/2021",
    invoiceNumber: "",
    invoicePaid: false,
    itemID: "#0003",
    orderAgent: "Customer Agent",
    orderCustomer: "Customer Name",
    orderMultiplePages: false,
    orderName: "Order Three",
    orderType: "Embellishment",
    orderTypeNotes: "Type Notes Here",
    //#region P1
    p1Men: true,
    p1Woman: false,
    p1Youth: false,
    p1Other: false,
    p1OtherName: "",
    p1PPP: "5$",
    p1Tax: false,
    p1ItemNumber: "#123",
    p1ProductType: "Tee",
    p1Color: "Black",
    p1AdditionalDescription: "Additional Description Here",
    p1ApparelSource: "SanMar",
    p1XS: "2",
    p1S: "2",
    p1M: "2",
    p1L: "2",
    p1XL: "2",
    p1XXL: "2",
    p1XXXL: "2",
    p1Other1: "OS",
    p1Other1PCS: "2",
    p1Other2: "NB",
    p1Other2PCS: "2",
    p1Other3: "6M",
    p1Other3PCS: "2",
    p1Other4: "12M",
    p1Other4PCS: "2",
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
    paymentInvoiceUrl:
      "https://www.invoicesimple.com/wp-content/uploads/2018/06/Sample-Invoice-printable.png",
    paymentNotes: "Payment Notes Here",
    paymentTerms: false,
    positionAdditional: "Additional Position Info",
    positionBack: "Back Position Info",
    positionFront: "Front Position Info",
    positionMatchProof: false,
    positionNotes: "Position Notes Here",
    positionRightLeft: "RL Position Info",
    printer: "Andrew",
    printerDate: "01/20/2021",
    printerDuration: "1 hr",
    printerSchedule: "First 8am",
    proof: [
      "https://cdn.shopify.com/s/files/1/1663/2287/products/blank_8a017003-4834-4e04-8979-d18c665db0ed_540x.png",
    ],
    proofNotes: "Proof Notes Here",
    setup: "Setup Info",
    setupNotes: "Setup Notes Here",
    setupScreen: "Setup Screen",
    setupScreens: "Setup Screens",
    shipAddress: "4722 Normandie Ave",
    shipAttn: "Andrew",
    shipEmail: "andrew@gmail.com",
    shipLabel:
      "https://cdn.pluginhive.com/wp-content/uploads/2018/10/USPS-sample-shipping-label.png",
    shipMethod: "USPS",
    shipName: "Andrew",
    shipNotes: "Shipping Notes Here",
    shipPackingList:
      "https://www.wordtemplatesonline.net/wp-content/uploads/Free-packing-slip-template-word.jpg",
    shipPhone: "310-916-9514",
    shipPickup: false,
    shipState: "CA",
    shipTrackingUrl:
      "https://assets.easypost.com/assets/images/blog/tracking_details_web_v1_a.328274c901c2ac0de96dd84af7c26202.jpg",
    shipZipCode: "90037",
    status: "New Order",
    statusEditor: "None",
  });

  res.statusCode = 201;
  res.json("Item Created");
};
