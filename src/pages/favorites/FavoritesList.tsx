import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import FavoriteProductCard from './FavoriteProductCard';

interface FavoritesListProps {
  favorites: Product[];
  addProduct: (product: Product) => void;
  removeProductFromFavorite: (product: Product) => void;
}

const FavoritesList: FC<FavoritesListProps> = ({
  favorites,
  addProduct,
  removeProductFromFavorite,
}) => (
  <Box>
    {favorites.length === 0 ? (
      <Typography>You have no favorite products.</Typography>
    ) : (
      favorites.map((product) => (
        <FavoriteProductCard
          key={product.id}
          product={product}
          addProduct={addProduct}
          removeProductFromFavorite={removeProductFromFavorite}
        />
      ))
    )}
  </Box>
);

export default FavoritesList;
