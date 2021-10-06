interface ProductReviews {
  review: string;
  scores: number;
}

interface ProductPictures {
  thumbnail: string;
  photo: number;
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
