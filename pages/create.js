import Create from "../components/Create";
import Head from "next/head";

export default function CreateHome() {
  return (
    <>
      <Head>
        <title>Create | District Printing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Create />
    </>
  );
}
