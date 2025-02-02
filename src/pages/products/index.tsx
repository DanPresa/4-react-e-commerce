import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ProductCard from './ProducCard';

// Product Data Type
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
};

// Sample Products
const similarProducts: Product[] = [
  {
    id: 1,
    name: 'Gaming Headphone',
    description: 'Table with air purifier, stained veneer/black',
    price: 239,
    oldPrice: 259,
    rating: 4.5,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 2,
    name: 'Macbook Pro 13"',
    description: '256GB, 8 core GPU, 8GB RAM',
    price: 1099,
    oldPrice: 1199,
    rating: 4.8,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 3,
    name: 'HomePod Mini',
    description: '5 Colors Available',
    price: 59,
    rating: 4.6,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 4,
    name: 'Laptop Sleeve MacBook',
    description: 'Organic Cotton, fairtrade certified',
    price: 59,
    rating: 4.3,
    image: 'https://via.placeholder.com/200',
  },
];

const recentlyViewed: Product[] = [
  {
    id: 5,
    name: 'Laptop Sleeve MacBook',
    description: 'Organic Cotton, fairtrade certified',
    price: 59,
    rating: 4.3,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 6,
    name: 'AirPods Max',
    description: 'A perfect balance of high-fidelity audio',
    price: 559,
    rating: 4.9,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 7,
    name: 'iPad Mini',
    description: 'Table with air purifier, stained veneer/black',
    price: 569,
    rating: 4.7,
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 8,
    name: 'Flower Laptop Sleeve',
    description: '15 in. x 10 in. – Flap top closure',
    price: 39,
    rating: 4.5,
    image: 'https://via.placeholder.com/200',
  },
];

const ProductPage = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* Section 1: Similar Items */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
        Similar Items You Might Like
      </Typography>
      <Grid container spacing={3}>
        {similarProducts.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {/* Section 2: Recently Viewed */}
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 5, mb: 3 }}>
        Recently Viewed
      </Typography>
      <Grid container spacing={3}>
        {recentlyViewed.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductPage;
