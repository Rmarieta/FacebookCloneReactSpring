import { getSession } from "next-auth/react";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import RightSidebar from "../components/RightSidebar";
import Sidebar from "../components/Sidebar";

export default function Home({ session }) {
  if (!session) {
    return (
      <>
        <Head>
          <title>Login</title>
          <link rel="icon" href="/fb_icon.png" />
        </Head>
        <div className="full bg-[#18191a]">
          <Login />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Facebook</title>
          <link rel="icon" href="/fb_icon.png" />
        </Head>
        <Header />
        <main className="flex">
          {/* LEFT SIDEBAR */}
          <Sidebar />
          {/* FEED */}
          <Feed />
          {/* RIGHT SIDEBAR */}
          <RightSidebar />
        </main>
      </>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
