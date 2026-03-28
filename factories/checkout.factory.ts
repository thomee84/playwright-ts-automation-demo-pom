export type CheckoutData = {
  firstName: string;
  lastName: string;
  zipCode: string;
};

export const CheckoutFactory = {
  validAddress(overrides?: Partial<CheckoutData>): CheckoutData {
    return {
      firstName: 'Test First Name',
      lastName: 'Test Last Name',
      zipCode: 'T1234',
      ...overrides,
    };
  },
};
