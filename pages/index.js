import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "../components/Navbar/TopNav";
import ActionImage from "../components/ActionImage/ActionImage";
import BodyText from "../components/BodyText/BodyText";
export default function Home() {
  return (
    <div className={styles.container}>
      <TopNav />
      <ActionImage />
      <BodyText />
    </div>
  );
}
