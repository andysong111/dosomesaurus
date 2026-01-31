export type Role = 'buyer' | 'seller' | 'admin';

export interface Organization {
  id: string;
  name: string;
  businessNumber: string;
  createdAt: string;
}
