import { Box, Button, Card, Divider, Typography } from '@mui/material';
import { formatPrice } from '../../utils/formatPrice';
import useCartActions from '../../redux/cart/useCartActions';

const OrderSummary = () => {
  const { products } = useCartActions();

  const totalProducts = products.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Card sx={{ p: 2, boxShadow: 1 }}>
      <Typography variant="h6" fontWeight="bold">
        Order Summary
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 2,
        }}
      >
        <Typography>Products ({totalProducts})</Typography>
        <Typography fontWeight="bold">{formatPrice(totalAmount)}</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 1,
        }}
      >
        <Typography>Shipping ({totalProducts})</Typography>
        <Typography color="green">Free</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Total Price */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 2,
        }}
      >
        <Typography variant="h6">Total</Typography>
        <Typography variant="h6" fontWeight="bold">
          {formatPrice(totalAmount)}
        </Typography>
      </Box>

      <Button fullWidth variant="contained" color="primary">
        Checkout Now
      </Button>
    </Card>
  );
};

export default OrderSummary;
