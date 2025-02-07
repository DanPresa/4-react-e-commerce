import { MouseEvent, useState } from 'react';
import { Button, ListItemText, Menu, MenuItem } from '@mui/material';
import { ExpandMore, GridView } from '@mui/icons-material';
import useCategoryActions from '../redux/categories/useCategoryActions';

const CategoriesDropdown = () => {
  const { categories, changeCategory } = useCategoryActions();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleMenuClose = () => setAnchorEl(null);

  const handleCategorySelect = (category: Category) => {
    changeCategory(category.slug); // Change the selected category
    handleMenuClose(); // Close the menu
  };

  return (
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

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {categories.map((category) => (
          <MenuItem
            key={category.slug}
            onClick={() => handleCategorySelect(category)}
          >
            <ListItemText primary={category.name} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CategoriesDropdown;
