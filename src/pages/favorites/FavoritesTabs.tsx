import { FC } from 'react';
import { Tabs, Tab } from '@mui/material';

interface FavoritesTabsProps {
  tab: number;
  setTab: (newValue: number) => void;
}

const FavoritesTabs: FC<FavoritesTabsProps> = ({ tab, setTab }) => (
  <Tabs value={tab} onChange={(_, newValue) => setTab(newValue)} sx={{ mb: 3 }}>
    <Tab label="Favorites" />
  </Tabs>
);

export default FavoritesTabs;
