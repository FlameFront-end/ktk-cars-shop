import { NewsList, ProductGrid } from "../../components";
import { products } from "../../data";

const Home = () => {
  return (
    <>
      <ProductGrid products={products} />
      <NewsList />
    </>
  );
};

export default Home;
