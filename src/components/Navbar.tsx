import { MouseEvent, useEffect, useState } from 'react';
import useCategoryActions from '../redux/categories/useCategoryActions';
import { useMatch } from 'react-router';
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
  Badge,
  Box,
  Button,
} from '@mui/material';
import {
  ShoppingBag,
  AccountCircle,
  ExpandMore,
  GridView,
} from '@mui/icons-material';

const Navbar = () => {
  const isHome = useMatch('/');
  const { categories, fetchCategories, changeCategory } = useCategoryActions();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle category selection
  const handleCategorySelect = (category: Category) => {
    changeCategory(category.slug); // Change the selected category
    handleMenuClose(); // Close the menu
  };

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
          justifyContent: isHome ? 'space-between' : 'flex-end',
        }}
      >
        {isHome && (
          <>
            <Button
              onClick={handleMenuOpen}
              startIcon={<GridView sx={{ color: 'red' }} />}
              endIcon={<ExpandMore />}
              sx={{
                backgroundColor: '#f8f9fa',
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 'bold',
                px: 2,
              }}
            >
              Categories
            </Button>

            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {categories.map((category: Category) => (
                <MenuItem
                  key={category.slug}
                  onClick={() => handleCategorySelect(category)}
                >
                  <ListItemText primary={category.name} />
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
        {/* Categories Button */}

        {/* Right Icons */}
        <Box sx={{ display: 'flex' }}>
          <IconButton>
            <AccountCircle fontSize="medium" />
          </IconButton>
          <IconButton>
            <Badge badgeContent={3} color="error">
              <ShoppingBag fontSize="medium" />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
