import { useNavigate } from 'react-router';
import useCartActions from '../redux/cart/useCartActions';
import useFavoritesActions from '../redux/favorites/useFavoritesActions';
import { Badge, Box, IconButton } from '@mui/material';
import {
  AccountCircle,
  Favorite,
  FavoriteBorderOutlined,
  ShoppingBag,
} from '@mui/icons-material';

const RightIconsNavbar = () => {
  const { products } = useCartActions();
  const { favorites } = useFavoritesActions();
  const isThereFavorites = favorites.length > 0;

  const navigation = useNavigate();
  const handleGotToFavoritesClick = () => navigation('/favorites');
  const handleGoToCartClick = () => navigation('/cart');

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <IconButton>
        <AccountCircle fontSize="medium" />
      </IconButton>
      <IconButton onClick={handleGotToFavoritesClick}>
        {isThereFavorites ? (
          <Favorite fontSize="medium" color="error" />
        ) : (
          <FavoriteBorderOutlined fontSize="medium" />
        )}
      </IconButton>
      <IconButton onClick={handleGoToCartClick}>
        <Badge badgeContent={products.length} color="error">
          <ShoppingBag fontSize="medium" />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default RightIconsNavbar;
