import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ProductCard from './ProducCard';
import useProductsActions from '../../redux/products/useProductsActions';
import { useEffect } from 'react';

const ProductPage = () => {
  const { products, fetchAllProducts } = useProductsActions();

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <Box sx={{ p: 4 }}>
      {/* Section 1: Similar Items */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
        Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product: Product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductPage;
