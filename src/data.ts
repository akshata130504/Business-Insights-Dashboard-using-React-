export interface SuperstoreData {
  id: number;
  orderDate: string;
  region: string;
  state: string;
  shipMode: string;
  segment: string;
  category: string;
  subCategory: string;
  sales: number;
  profit: number;
  quantity: number;
  discount: number;
  shippingCost: number;
}

export const superstoreData: SuperstoreData[] = [
  { id: 1, orderDate: '2023-01-01', region: 'Central', state: 'Texas', shipMode: 'Standard Class', segment: 'Consumer', category: 'Furniture', subCategory: 'Chairs', sales: 250.50, profit: 45.20, quantity: 3, discount: 0.0, shippingCost: 15.00 },
  { id: 2, orderDate: '2023-01-05', region: 'East', state: 'New York', shipMode: 'Second Class', segment: 'Corporate', category: 'Office Supplies', subCategory: 'Paper', sales: 15.20, profit: 7.10, quantity: 5, discount: 0.2, shippingCost: 2.50 },
  { id: 3, orderDate: '2023-01-10', region: 'West', state: 'California', shipMode: 'First Class', segment: 'Home Office', category: 'Technology', subCategory: 'Phones', sales: 890.00, profit: 120.50, quantity: 1, discount: 0.0, shippingCost: 45.00 },
  { id: 4, orderDate: '2023-01-15', region: 'South', state: 'Florida', shipMode: 'Standard Class', segment: 'Consumer', category: 'Furniture', subCategory: 'Tables', sales: 450.00, profit: -20.00, quantity: 2, discount: 0.45, shippingCost: 85.00 },
  { id: 5, orderDate: '2023-02-01', region: 'Central', state: 'Illinois', shipMode: 'Standard Class', segment: 'Corporate', category: 'Office Supplies', subCategory: 'Binders', sales: 12.50, profit: 5.40, quantity: 10, discount: 0.8, shippingCost: 1.20 },
  { id: 6, orderDate: '2023-02-10', region: 'East', state: 'Pennsylvania', shipMode: 'Same Day', segment: 'Consumer', category: 'Technology', subCategory: 'Accessories', sales: 150.00, profit: 35.00, quantity: 3, discount: 0.0, shippingCost: 25.00 },
  { id: 7, orderDate: '2023-02-15', region: 'West', state: 'Washington', shipMode: 'Standard Class', segment: 'Home Office', category: 'Furniture', subCategory: 'Bookcases', sales: 320.00, profit: 15.00, quantity: 1, discount: 0.15, shippingCost: 35.00 },
  { id: 8, orderDate: '2023-03-01', region: 'South', state: 'Virginia', shipMode: 'Standard Class', segment: 'Consumer', category: 'Office Supplies', subCategory: 'Art', sales: 45.00, profit: 12.00, quantity: 4, discount: 0.0, shippingCost: 5.00 },
  { id: 9, orderDate: '2023-03-05', region: 'Central', state: 'Michigan', shipMode: 'First Class', segment: 'Corporate', category: 'Technology', subCategory: 'Copiers', sales: 1200.00, profit: 450.00, quantity: 1, discount: 0.0, shippingCost: 120.00 },
  { id: 10, orderDate: '2023-03-10', region: 'East', state: 'Ohio', shipMode: 'Standard Class', segment: 'Home Office', category: 'Furniture', subCategory: 'Furnishings', sales: 85.00, profit: 25.00, quantity: 2, discount: 0.0, shippingCost: 10.00 },
  { id: 11, orderDate: '2023-04-01', region: 'West', state: 'California', shipMode: 'Second Class', segment: 'Consumer', category: 'Office Supplies', subCategory: 'Storage', sales: 210.00, profit: 40.00, quantity: 3, discount: 0.2, shippingCost: 18.00 },
  { id: 12, orderDate: '2023-04-10', region: 'South', state: 'Texas', shipMode: 'Standard Class', segment: 'Corporate', category: 'Technology', subCategory: 'Machines', sales: 1500.00, profit: -150.00, quantity: 1, discount: 0.7, shippingCost: 250.00 },
  { id: 13, orderDate: '2023-05-01', region: 'Central', state: 'Illinois', shipMode: 'Standard Class', segment: 'Home Office', category: 'Furniture', subCategory: 'Chairs', sales: 310.00, profit: 60.00, quantity: 2, discount: 0.0, shippingCost: 25.00 },
  { id: 14, orderDate: '2023-05-15', region: 'East', state: 'New York', shipMode: 'First Class', segment: 'Consumer', category: 'Office Supplies', subCategory: 'Paper', sales: 25.00, profit: 10.00, quantity: 8, discount: 0.0, shippingCost: 4.00 },
  { id: 15, orderDate: '2023-06-01', region: 'West', state: 'California', shipMode: 'Standard Class', segment: 'Corporate', category: 'Technology', subCategory: 'Phones', sales: 950.00, profit: 180.00, quantity: 2, discount: 0.0, shippingCost: 55.00 },
  { id: 16, orderDate: '2023-06-15', region: 'South', state: 'Florida', shipMode: 'Same Day', segment: 'Home Office', category: 'Furniture', subCategory: 'Tables', sales: 520.00, profit: 10.00, quantity: 1, discount: 0.4, shippingCost: 95.00 },
  { id: 17, orderDate: '2023-07-01', region: 'Central', state: 'Texas', shipMode: 'Second Class', segment: 'Consumer', category: 'Office Supplies', subCategory: 'Binders', sales: 18.00, profit: 8.00, quantity: 12, discount: 0.7, shippingCost: 2.00 },
  { id: 18, orderDate: '2023-07-10', region: 'East', state: 'Pennsylvania', shipMode: 'Standard Class', segment: 'Corporate', category: 'Technology', subCategory: 'Accessories', sales: 180.00, profit: 45.00, quantity: 4, discount: 0.0, shippingCost: 15.00 },
  { id: 19, orderDate: '2023-08-01', region: 'West', state: 'Washington', shipMode: 'First Class', segment: 'Home Office', category: 'Furniture', subCategory: 'Bookcases', sales: 350.00, profit: 25.00, quantity: 1, discount: 0.15, shippingCost: 45.00 },
  { id: 20, orderDate: '2023-08-15', region: 'South', state: 'Virginia', shipMode: 'Standard Class', segment: 'Consumer', category: 'Office Supplies', subCategory: 'Art', sales: 55.00, profit: 15.00, quantity: 5, discount: 0.0, shippingCost: 6.00 },
  { id: 21, orderDate: '2023-09-01', region: 'Central', state: 'Michigan', shipMode: 'Standard Class', segment: 'Corporate', category: 'Technology', subCategory: 'Phones', sales: 450.00, profit: 80.00, quantity: 2, discount: 0.0, shippingCost: 35.00 },
  { id: 22, orderDate: '2023-09-10', region: 'East', state: 'Ohio', shipMode: 'Second Class', segment: 'Home Office', category: 'Furniture', subCategory: 'Chairs', sales: 120.00, profit: 20.00, quantity: 1, discount: 0.1, shippingCost: 12.00 },
  { id: 23, orderDate: '2023-10-01', region: 'West', state: 'California', shipMode: 'Standard Class', segment: 'Consumer', category: 'Office Supplies', subCategory: 'Storage', sales: 85.00, profit: 15.00, quantity: 4, discount: 0.0, shippingCost: 8.00 },
  { id: 24, orderDate: '2023-10-15', region: 'South', state: 'Texas', shipMode: 'First Class', segment: 'Corporate', category: 'Technology', subCategory: 'Accessories', sales: 300.00, profit: 70.00, quantity: 2, discount: 0.0, shippingCost: 25.00 },
  { id: 25, orderDate: '2023-11-01', region: 'Central', state: 'Illinois', shipMode: 'Standard Class', segment: 'Home Office', category: 'Furniture', subCategory: 'Furnishings', sales: 65.00, profit: 10.00, quantity: 3, discount: 0.2, shippingCost: 7.00 },
  { id: 26, orderDate: '2023-11-15', region: 'East', state: 'New York', shipMode: 'Same Day', segment: 'Consumer', category: 'Office Supplies', subCategory: 'Binders', sales: 45.00, profit: 12.00, quantity: 6, discount: 0.0, shippingCost: 12.00 },
  { id: 27, orderDate: '2023-12-01', region: 'West', state: 'California', shipMode: 'Standard Class', segment: 'Corporate', category: 'Technology', subCategory: 'Copiers', sales: 1800.00, profit: 600.00, quantity: 1, discount: 0.0, shippingCost: 150.00 },
  { id: 28, orderDate: '2023-12-15', region: 'South', state: 'Florida', shipMode: 'Second Class', segment: 'Home Office', category: 'Furniture', subCategory: 'Tables', sales: 400.00, profit: -50.00, quantity: 2, discount: 0.5, shippingCost: 110.00 },
];
