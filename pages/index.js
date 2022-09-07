import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../components/Navbar/TopNav";
import ActionImage from "../components/ActionImage/ActionImage";
import BodyText from "../components/BodyText/BodyText";
import TravelWithUs from "../components/TravelWithUs/TravelWithUs";
import Tours from "../components/Tours/Tours";
import AdventureSection from "../components/AdventureSection/AdventureSection";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <TopNav />
      <ActionImage />
      <BodyText />
      <TravelWithUs />
      <Tours />
      <AdventureSection />
      <Footer />
    </div>
  );
}
// export async function getStaticProps() {
//   return {
//     // dbApi: props
//     props: {
//       loadTours: toursData,
//     },
//   };
// }
