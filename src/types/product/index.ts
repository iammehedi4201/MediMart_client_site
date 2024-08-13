interface Category {
  _id: string;
}

interface Variant {
  _id: string;
}

export interface IProduct {
  _id: string;
  name: string;
  slug: string;
  photos?: string[];
  description?: string;
  metaKey?: string;
  price: number;
  discount?: number;
  stockStatus?: boolean;
  quantity: number;
  status?: "active" | "inactive";
  categories: {
    primary?: Category;
    secondary?: Category;
    tertiary?: Category;
  };
  variants?: Variant[];
  company?: string;
  defaultPrice?: number;
  isDeleted: boolean;
}
