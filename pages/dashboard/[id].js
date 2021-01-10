import { connectToDatabase } from "../../util/mongodb";

export default function DashboardProduct() {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { db } = await connectToDatabase();

  const data = await db.collection("products").findOne(
    {
      _id: params.id,
    },
    {
      projection: {
        id: 1,
        orderName: 1,
        invoice: 1,
        apparel: 1,
        customerName: 1,
        created: 1,
        arrival: 1,
        status: 1,
        printerName: 1,
        art: 1,
        shippingLabel: 1,
        packingList: 1,
      },
    }
  );

  return {
    props: { product: JSON.parse(JSON.stringify(data)) },
    revalidate: 1,
  };
}
