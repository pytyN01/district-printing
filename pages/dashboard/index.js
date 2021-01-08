import Dashboard from "../../components/Dashboard";
import Head from "next/head";
import React from "react";

// import { connectToDatabase } from "../../util/mongodb";

export default function DashboardHome() {
// { products }
  // React.useEffect(() => {
  //   console.log(products);
  // }, []);

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

// export async function getServerSideProps(context) {
//   // const { client } = await connectToDatabase();
//   // const isConnected = await client.isConnected();

//   const { db } = await connectToDatabase();

//   const data = db
//     .collection("products")
//     .find()
//     .sort({ created: 1 })
//     .limit(100)
//     .toArray();

//   const products = data.map((product) => {
//     return {
//       invoice: product.invoice,
//       jobName: product.jobName,
//       apparel: product.apparel,
//       customer: product.customer,
//       created: product.created,
//       arrival: product.arrival,
//       status: product.status,
//       printer: product.printer,
//       art: product.art,
//       shipping: product.shipping,
//     };
//   });

//   return {
//     props: { products },
//   };
// }
