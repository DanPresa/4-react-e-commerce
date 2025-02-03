interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  availabilityStatus: string;
  reviews: Review[];
  images: string[];
  thumbnail: string;
}

interface ProductData {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

type ProductWithTotal = Omit<ProductData, 'products'>;

interface ProductsState extends ProductWithTotal {
  loading: boolean;
  products: Product[];
  error: string | null;
}
