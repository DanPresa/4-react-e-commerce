import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Checkbox,
} from '@mui/material';

// Category List
const categories = [
  'laptops',
  'mens-shirts',
  'mens-shoes',
  'mens-watches',
  'mobile-accessories',
  'smartphones',
  'sports-accessories',
  'sunglasses',
  'tablets',
  'womens-bags',
  'womens-dresses',
  'womens-jewellery',
  'womens-shoes',
  'womens-watches',
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 250, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        {categories.map((category) => (
          <div key={category}>
            <ListItemButton>
              <ListItemText
                primary={category.replace('-', ' ')}
                sx={{ textTransform: 'capitalize' }}
              />
              <Checkbox />
            </ListItemButton>
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
