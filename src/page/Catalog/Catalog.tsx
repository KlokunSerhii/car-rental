import CatalogList from "../../components/CatalogList";
import Container from "../../components/Container";
import FilterForm from "../../components/FilterForm";
import Title from "../../components/Title";

function Catalog() {
  return (
    <Container>
      <Title title='Catalog'/>
      <FilterForm/>
      <CatalogList/>
    </Container>
  );
}
export default Catalog;
