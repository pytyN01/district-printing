import Login from "../components/Login";
import Head from "next/head";

import { connectToDatabase } from "../util/mongodb";

export default function LoginHome() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  );
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}
