import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-yellow-100">
      <Head>
        <title>Cocoon-clone-youtube</title>
        <link rel="icon" href="/newguunnma-fav.png" />
      </Head>

      {/* header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Nav */}
      <Nav />

      {/* Main */}
      <main className="flex">
        {/* Right */}
        <Main />

        {/* Left */}
        <Sidebar />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
