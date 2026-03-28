export type Product = {
  name: string;
};

export const ProductFactory = {
  sauceLabsBackpack(overrides?: Partial<Product>): Product {
    return { name: 'Sauce Labs Backpack', ...overrides };
  },
};
