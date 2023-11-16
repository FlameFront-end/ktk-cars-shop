import { NewsList, ProductGrid } from "../../components";
import { products } from "../../data";

const HomePage = () => {
  return (
    <>
      <ProductGrid products={products} />
      <NewsList />
    </>
  );
};

export default HomePage;
