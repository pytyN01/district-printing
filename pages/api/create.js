// import { connectToDatabase } from "../../util/mongodb";

export default (req, res) => {
  // const {db} = await connectToDatabase()
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
