import { useState } from 'react';
import { useNavigate } from 'react-router';
import useFavoritesActions from '../../redux/favorites/useFavoritesActions';
import useCartActions from '../../redux/cart/useCartActions';
import { Box } from '@mui/material';
import GoBackBtn from '../../components/GoBackBtn';
import Title from '../../components/Title';
import FavoritesTabs from './FavoritesTabs';
import FavoritesList from './FavoritesList';

const FavoritesPage = () => {
  const { favorites, removeProductFromFavorite } = useFavoritesActions();
  const { addProduct } = useCartActions();
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4, maxWidth: '900px', mx: 'auto' }}>
      <GoBackBtn title="Go back to Product" navigate={() => navigate('/')} />
      <Title text="Wish List" variant="h5" />

      {/* Tabs */}
      <FavoritesTabs tab={tab} setTab={setTab} />

      {/* Render Favorites */}
      <FavoritesList
        favorites={favorites}
        addProduct={addProduct}
        removeProductFromFavorite={removeProductFromFavorite}
      />
    </Box>
  );
};

export default FavoritesPage;
