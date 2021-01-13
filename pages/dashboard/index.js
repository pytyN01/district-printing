import Dashboard from "../../components/Dashboard";
import Head from "next/head";
import React from "react";

import { connectToDatabase } from "../../util/mongodb";

export default function DashboardHome({ products }) {
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
      itemID: product.itemID,
      orderName: product.orderName,
      invoiceNumber: product.invoiceNumber,
      invoicePaid: product.invoicePaid,
      apparel: product.apparel,
      orderCustomer: product.orderCustomer,
      orderAgent: product.orderAgent,
      createdDate: product.createdDate,
      arrivalTime: product.arrivalTime,
      arrivalDate: product.arrivalDate,
      arrivalHardDueDate: product.arrivalHardDueDate,
      status: product.status,
      statusEditor: product.statusEditor,
      printer: product.printer,
      printerTime: product.printerTime,
      art: product.art,
      trackingUrl: product.shipTrackingUrl,
      packingUrl: product.shipPackingList,
    };
  });

  return {
    props: { products },
  };
}
