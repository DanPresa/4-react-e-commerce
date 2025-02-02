import { FC } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
  Rating,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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

// Reusable Product Card Component
const ProductCard: FC<{ product: Product }> = ({ product }) => (
  <Card
    sx={{
      p: 2,
      boxShadow: 1,
      borderRadius: 2,
      position: 'relative',
      '&:hover': { boxShadow: 3 },
    }}
  >
    {/* Wishlist Icon */}
    <IconButton sx={{ position: 'absolute', top: 10, right: 10 }}>
      <FavoriteBorderIcon />
    </IconButton>

    {/* Product Image */}
    <CardMedia
      component="img"
      height="160"
      image={product.image}
      alt={product.name}
    />

    <CardContent sx={{ textAlign: 'left' }}>
      {/* Product Name */}
      <Typography variant="h6" fontWeight="bold">
        {product.name}
      </Typography>

      {/* Description */}
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>

      {/* Price */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
        <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>
          ${product.price.toFixed(2)}
        </Typography>
        {product.oldPrice && (
          <Typography
            variant="body2"
            sx={{ textDecoration: 'line-through', color: 'gray' }}
          >
            ${product.oldPrice.toFixed(2)}
          </Typography>
        )}
      </Box>

      {/* Rating */}
      <Box>
        <Rating
          value={product.rating}
          precision={0.1}
          readOnly
          size="small"
          sx={{ mt: 1 }}
        />
      </Box>

      {/* Add to Cart Button */}
      <Button variant="outlined" sx={{ mt: 2, borderRadius: 30 }}>
        Add to Cart
      </Button>
    </CardContent>
  </Card>
);

export default ProductCard;
