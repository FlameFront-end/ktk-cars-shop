import { Grid } from "@mui/material";

import { ProductCard } from "../../index";

const ProductGrid = ({ products }) => {
  return (
    <Grid className="gridContainer" container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} lg={3} md={4} sm={6} xs={12}>
          <ProductCard
            description={product.description}
            id={product.id}
            img={product.img}
            price={product.price}
            title={product.title}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
