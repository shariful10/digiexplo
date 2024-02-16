export interface OrderItemsProps {
   data: {
      id: number;
      tableTitle: string;
      productImage: string;
      productTitle: string;
      vendorName: string;
      price: number;
      date: string;
   }[]
}