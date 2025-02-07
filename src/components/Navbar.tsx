import { useEffect } from 'react';
import { useMatch } from 'react-router';
import useCategoryActions from '../redux/categories/useCategoryActions';
import { AppBar, Toolbar } from '@mui/material';
import CartDrawer from './CartDrawer';
import CategoriesDropdown from './CategoriesDropdown';
import RightIconsNavbar from './RightIconsNavbar';

const Navbar = () => {
  const { fetchCategories } = useCategoryActions();
  const isProductPage = useMatch('/');

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'divider' }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: isProductPage ? 'space-between' : 'flex-end',
        }}
      >
        {isProductPage && <CategoriesDropdown />}

        {/* Right Icons */}
        <RightIconsNavbar />

        {/* Cart Drawer */}
        <CartDrawer />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
