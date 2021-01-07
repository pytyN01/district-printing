import Dashboard from "../../components/Dashboard";
import Head from "next/head";

export default function DashboardHome() {
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
