import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  db.collection("products").deleteOne({
    itemID: req.body,
  });

  res.statusCode = 200;
  res.json("Item Deleted");
};
