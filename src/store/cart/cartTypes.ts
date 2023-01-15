export interface ICartReducer {
  goods: {
    [key: string]: {
      amount: number;
      price: number;
      discount: number;
    };
  };
}
