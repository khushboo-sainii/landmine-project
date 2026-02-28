import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/hero/home-hero.mp4"
          as="video"
          type="video/mp4"
        />
      </Head>

      <Navbar />
      <main className="pt-[68px]">{children}</main>
      <Footer />
    </>
  );
}
