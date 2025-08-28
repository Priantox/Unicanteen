export enum CanteenName {
    OLYMPIA_CAFE = "OLYMPIA_CAFE",
    NEPTUNE_CAFE = "NEPTUNE_CAFE",
    KHANS_KITCHEN = "KHANS_KITCHEN"
}

export interface CanteenDetails {
    id: string;
    name: CanteenName;
    canteen_image: string | null;
    ownerId: string;
    createdAt: Date;
    updatedAt: Date;
    reviews: {
        createdAt: Date;
        updatedAt: Date;
        canteenId: string;
        rating: number;
        comment: string | null;
    }[];
    CanteenFood: {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        description: string | null;
        image: string | null;
        canteenId: string;
        stocks: number;
    }[];
}