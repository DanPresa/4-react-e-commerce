import { FC } from 'react';
import useCartActions from '../../redux/cart/useCartActions';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { Add, Delete, Remove } from '@mui/icons-material';
import { formatPrice } from '../../utils/formatPrice';

interface CartItemProps {
  prod: Product;
}

const CartItem: FC<CartItemProps> = ({ prod }) => {
  const { changeProductQuantity, removeProductFromCart } = useCartActions();

  const handleUpdateProductQuantity = (product: Product, amount: number) => {
    changeProductQuantity(product, amount);
  };

  const handleDeleteProductFromCartClick = (product: Product) => {
    removeProductFromCart(product);
  };

  return (
    <Card
      key={prod.id}
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 2,
        p: 2,
        boxShadow: 1,
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        image={prod.thumbnail}
        alt={prod.title}
        sx={{ width: 80, height: 80, objectFit: 'contain', mr: 2 }}
      />

      {/* Product Details */}
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6">{prod.title}</Typography>

        {/* Price & Discount */}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          {prod.discountPercentage > 0 && (
            <Typography
              variant="body2"
              sx={{ color: 'green', fontWeight: 'bold', mr: 1 }}
            >
              -{prod.discountPercentage}%{' '}
              <s style={{ color: 'gray' }}>
                ${(prod.price / (1 - prod.discountPercentage / 100)).toFixed(2)}
              </s>
            </Typography>
          )}
          <Typography variant="h6" fontWeight="bold">
            {formatPrice(prod.price)}
          </Typography>
        </Box>

        {/* Quantity Selector */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mt: 1,
          }}
        >
          <IconButton
            onClick={() => handleUpdateProductQuantity(prod, -1)}
            disabled={prod.quantity <= 1}
            size="small"
          >
            <Remove />
          </IconButton>
          <Typography>{prod.quantity}</Typography>
          <IconButton
            onClick={() => handleUpdateProductQuantity(prod, 1)}
            size="small"
          >
            <Add />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            +50 available
          </Typography>
        </Box>

        {/* Actions */}
        <Box sx={{ display: 'flex', mt: 1, gap: 2 }}>
          <Button
            startIcon={<Delete />}
            variant="text"
            color="error"
            onClick={() => handleDeleteProductFromCartClick(prod)}
          >
            Delete
          </Button>
          <Button variant="text" color="primary">
            Save
          </Button>
          <Button variant="text" color="secondary">
            Buy Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartItem;
