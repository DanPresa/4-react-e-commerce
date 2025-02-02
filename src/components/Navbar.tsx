import { MouseEvent, useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
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

// Category List with Icons
const categories = [
  { name: 'Fashion', icon: '👕' },
  { name: 'Electronics', icon: '🔌' },
  { name: 'Bikes', icon: '🚴' },
  { name: 'Home & Garden', icon: '🏡' },
  { name: 'Gifts', icon: '🎁' },
  { name: 'Music', icon: '🎵' },
  { name: 'Health & Beauty', icon: '💄' },
  { name: 'Pets', icon: '🐾' },
  { name: 'Baby Toys', icon: '🧸' },
  { name: 'Groceries', icon: '🛒' },
  { name: 'Automotive', icon: '🚗' },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'divider' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Categories Button */}
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
          {categories.map((category) => (
            <MenuItem key={category.name} onClick={handleMenuClose}>
              <ListItemIcon>{category.icon}</ListItemIcon>
              <ListItemText primary={category.name} />
            </MenuItem>
          ))}
        </Menu>

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
