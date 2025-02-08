import { useEffect } from 'react';
import useCategoryActions from '../../redux/categories/useCategoryActions';
import useProductsActions from '../../redux/products/useProductsActions';
import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ProductCard from './ProducCard';

const ProductPage = () => {
  console.log('ProductPage rendered');
  const { selectedCategory } = useCategoryActions();
  const { loading, products, getAllProducts, getProductsByCategory } =
    useProductsActions();

  useEffect(() => {
    if (selectedCategory) {
      getProductsByCategory(selectedCategory);
    } else {
      getAllProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  if (loading) {
    return <Box>Loading products...</Box>;
  }

  return (
    <Box sx={{ p: 4 }}>
      {/* Section 1: Similar Items */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
        Products
      </Typography>
      {products && products.length > 0 ? (
        <Grid container spacing={3}>
          {products.map((product: Product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1">No products found</Typography>
      )}
    </Box>
  );
};

export default ProductPage;
