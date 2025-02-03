interface Category {
  slug: string;
  name: string;
}

interface CategoriesState {
  loading: boolean;
  categories: Category[];
  error: string | null;
}
