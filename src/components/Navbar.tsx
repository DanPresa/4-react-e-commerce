import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
} from '@mui/material';
import {
  Search,
  Person,
  FavoriteBorder,
  ShoppingBag,
} from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: 'divider' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
        {/* Left Side - Navigation Links */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          {['WOMEN', 'MEN', 'KIDS', 'BRANDS'].map((item) => (
            <Typography
              key={item}
              variant="body1"
              sx={{
                cursor: 'pointer',
                fontWeight: 'bold',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* Center - Logo */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
          HEAVENLY
        </Typography>

        {/* Right Side - Icons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
          <IconButton>
            <Badge badgeContent={2} color="error">
              <ShoppingBag />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
