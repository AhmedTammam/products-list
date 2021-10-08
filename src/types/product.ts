interface ProductReviews {
  review: string;
  score: number;
}

interface ProductPictures {
  thumbnail: string;
  photo: string;
}

export interface Product {
  id: string;
  name: string;
  totalReviews?: number;
  price?: number;
  photo?: string;
  reviews?: ProductReviews[];
  pictures?: ProductPictures[];
}
