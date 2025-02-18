export interface UserType {
    _id: string;
    name: string;
    email: string;
    clerkUserId: string;
    isAdmin: boolean;
    isActive: boolean;
    address?: {
        line1: string;
        line2?: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    phoneNumber?: string;
    wishList?: string[]; // Array of product IDs
    updatedAt: string;
    createdAt: string;
}

export interface ProductType {
    _id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number; // For displaying discounts
    category: string; // e.g., "Men's Clothing", "Women's Shoes"
    subCategory?: string; // e.g., "T-Shirts", "Heels"
    brand: string;
    stock: number; // Quantity in stock
    sizes?: string[]; // e.g., ["S", "M", "L", "XL"]
    colors?: string[]; // e.g., ["Red", "Blue", "Black"]
    media: string[]; // URLs or paths to images or videos
    isFeatured?: boolean;
    discountPercentage?: number;
    updatedAt: string;
    createdAt: string;
}

// Additional interfaces you might need:

export interface OrderType {
    _id: string;
    userId: string; // Reference to UserType _id
    products: {
        productId: string; // Reference to ProductType _id
        quantity: number;
        priceAtPurchase: number;
    }[];
    totalAmount: number;
    status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
    shippingAddress: UserType['address'];
    createdAt: string;
    updatedAt: string;
}

export interface CartItemType {
    product: ProductType;
    quantity: number;
}

export interface CartType {
    _id?: string; // Optional if you're not storing carts in the database
    userId: string; // Reference to UserType _id
    items: CartItemType[];
    updatedAt: string;
}