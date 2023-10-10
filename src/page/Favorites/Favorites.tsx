import Container from "../../components/Container";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
// import FavoriteList from "../../components/FavoriteList";
import Title from "../../components/Title";

function Favorites() {
  return (
    <Container>
      <Title title="Favorites" />
      <FavoriteList />
    </Container>
  );
}
export default Favorites;
