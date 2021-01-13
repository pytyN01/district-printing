import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const term = req.query.term;
  const data = await db
    .collection("products")
    .aggregate([
      {
        $search: {
          search: {
            query: term,
            path: ["orderName", "orderCustomer"],
          },
        },
      },
      {
        $limit: 100,
      },
    ])
    .toArray();

  res.statusCode = 200;
  res.json({ data });
};
