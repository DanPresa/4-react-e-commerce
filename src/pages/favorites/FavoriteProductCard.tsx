import { FC } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';

interface FavoriteProductCardProps {
  product: Product;
  addProduct: (product: Product) => void;
  removeProductFromFavorite: (product: Product) => void;
}

const FavoriteProductCard: FC<FavoriteProductCardProps> = ({
  product,
  addProduct,
  removeProductFromFavorite,
}) => (
  <Card sx={{ display: 'flex', mb: 2, p: 2, boxShadow: 1 }}>
    <CardMedia
      component="img"
      image={product.thumbnail}
      alt={product.title}
      sx={{ width: 120, height: 120, objectFit: 'contain', mr: 2 }}
    />
    <CardContent sx={{ flex: 1 }}>
      <Typography variant="h6">{product.title}</Typography>
      <Typography variant="h5" sx={{ color: 'green', fontWeight: 'bold' }}>
        ${product.price.toFixed(2)}
      </Typography>
      {product.discountPercentage > 0 && (
        <Typography variant="body2" color="error">
          Before:{' '}
          <s>
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              2
            )}
          </s>{' '}
          - {product.discountPercentage}% OFF
        </Typography>
      )}
      <Typography variant="body2" color="text.secondary">
        in 15 months without interest of ${(product.price / 15).toFixed(2)}
      </Typography>
      <Typography variant="body2" color="success.main">
        🚚 Free Shipping
      </Typography>

      <Box sx={{ display: 'flex', mt: 1, gap: 2 }}>
        <Button
          startIcon={<Add />}
          variant="text"
          color="primary"
          onClick={() => addProduct(product)}
        >
          Add to Cart
        </Button>
        <Button
          startIcon={<Delete />}
          variant="text"
          color="error"
          onClick={() => removeProductFromFavorite(product)}
        >
          Delete
        </Button>
      </Box>
    </CardContent>
  </Card>
);

export default FavoriteProductCard;
