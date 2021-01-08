import Login from "../components/Login";
import Head from "next/head";

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
