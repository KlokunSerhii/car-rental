import Container from "../../components/Container";
import Title from "../../components/Title";
import Welcome from "../../components/Welcome";
import styles from "./Home.module.css";

function Home() {
  return (
    <Container className={styles.Container}>
      <Title
        title="Hello, here you can choose a car for your trip."
        className={styles.Title}
      />
      <Welcome />
    </Container>
  );
}
export default Home;
