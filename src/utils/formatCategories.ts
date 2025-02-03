const replaceNameCategory = (category: string): string => {
  return category
    .replace(/-/g, ' ') // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
};

export const formatCategories = (categories: string[]): Category[] => {
  return categories.map((category) => ({
    slug: category,
    name: replaceNameCategory(category),
  }));
};
