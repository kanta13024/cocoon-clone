import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import MainFirstPage from "../components/MainFirstPage";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function firstpage() {
  return (
    <div>
      <Head>
        <title>Programing-School First Page</title>
        <link rel="icon" href="/newguunma-fav.png" />
      </Head>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      {/* Nav */}
      <Nav />

      {/* Main */}
      <main className="flex">
        <MainFirstPage />
        <Sidebar />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default firstpage;
