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

      <Dashboard />
    </>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data = await db
    .collection("products")
    .find()
    .sort({ _id: 1 })
    .limit(100)
    .toArray();

  const products = data.map((product) => {
    return {
      invoice: product.invoiceNumber,
    };
  });

  return {
    props: { products },
  };
}
