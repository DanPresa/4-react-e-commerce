import { useNavigate } from 'react-router';
import useCartActions from '../../redux/cart/useCartActions';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import GoBackBtn from '../../components/GoBackBtn';
import Title from '../../components/Title';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';

const CartPage = () => {
  const { products } = useCartActions();
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4, maxWidth: '1000px', mx: 'auto' }}>
      {/* Back Button */}
      <GoBackBtn title="back to products" navigate={() => navigate('/')} />

      <Title text="Shopping Cart" variant="h5" />

      <Grid container spacing={3}>
        {/* Left Section: Cart Items */}
        <Grid size={{ xs: 12, md: 8 }}>
          {products.length === 0 ? (
            <Typography>No products in the cart.</Typography>
          ) : (
            products.map((prod) => <CartItem key={prod.id} prod={prod} />)
          )}
        </Grid>

        {/* Right Section: Order Summary */}
        <Grid size={{ xs: 12, md: 4 }}>
          <OrderSummary />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
