type productData = {
    name: string;
    price: number;
    priceDiscount: number | null;
    description: string;
    productId: number;
    images: string[];
    alias: string;
    category: {
      name: string;
      alias: string;
    };
  }