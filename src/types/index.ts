
export enum Role {
    ADMIN = "ADMIN",
    SELLER = "SELLER",
    BUYER = "BUYER"
  }
  
  export enum OrderStatus {
    PENDING = "PENDING",
    PROCESSING = "PROCESSING",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED"
  }
  
  export enum PaymentStatus {
    PENDING = "PENDING",
    PAID = "PAID",
    FAILED = "FAILED",
    REFUNDED = "REFUNDED"
  }
  
  export interface User {
    id: string;
    name?: string;
    email?: string;
    image?: string;
    role: Role;
  }
  
  export interface Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    discountPrice?: number;
    stock: number;
    images: string[];
    categoryId: string;
    category: Category;
    subCategoryId?: string;
    subCategory?: SubCategory;
    sellerId: string;
    seller: User;
    featured: boolean;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Category {
    id: string;
    name: string;
    description?: string;
    image?: string;
    subCategories?: SubCategory[];
  }
  
  export interface SubCategory {
    id: string;
    name: string;
    description?: string;
    image?: string;
    categoryId: string;
    category: Category;
  }
  
  export interface Order {
    id: string;
    userId: string;
    user: User;
    status: OrderStatus;
    totalAmount: number;
    shippingAddress: string;
    paymentMethod: string;
    paymentStatus: PaymentStatus;
    items: OrderItem[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface OrderItem {
    id: string;
    orderId: string;
    order: Order;
    productId: string;
    product: Product;
    quantity: number;
    price: number;
  }
  
  export interface SellerProfile {
    id: string;
    userId: string;
    user: User;
    storeName: string;
    description?: string;
    contactEmail: string;
    contactPhone?: string;
    createdAt: Date;
    updatedAt: Date;
  }