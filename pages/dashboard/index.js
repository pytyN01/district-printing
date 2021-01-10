import Dashboard from "../../components/Dashboard";
import Head from "next/head";
import React from "react";

import { connectToDatabase } from "../../util/mongodb";

export default function DashboardHome({ products }) {
  React.useEffect(() => {
    console.log(products);
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard | District Printing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard data={products} />
    </>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const data = await db
    .collection("products")
    .find()
    .sort({ _id: 1 })
    .limit(100)
    .toArray();

  const products = data.map((product) => {
    return {
      id: product.itemIdNumber,
      invoice: product.invoiceNumber,
      orderName: product.orderName,
      customerName: product.customerName,
      customerAgent: product.customerAgent,
      apparel: product.apparel,
      created: product.createdDate,
      arrival: product.arrivalDate,
      status: product.status,
      statusEditor: product.statusEditor,
      printer: product.printer,
      printerComment: product.printerComment,
      art: product.art.images,
      shippingLabel: product.shipment.shippingLabel,
      packingList: product.shipment.packingList,
    };
  });

  return {
    props: { products },
  };
}
