export interface IProducts {
  products: Array<IProduct>;
}

export interface IProduct {
  id: number;
  name: string;
  image: string;
  available: boolean;
  popular: boolean;
  price: string;
  rating: string;
  votes: string;
}
