export {}

export type Roles = 'ADMIN' | 'CANTEEN_OWNER' | 'CUSTOMER' | 'DELIVERY_PERSON' | 'DEFAULT';

// export enum Roles {
//     ADMIN = "ADMIN",
//     CUSTOMER = "CUSTOMER",
//     CANTEEN_OWNER = "CANTEEN_OWNER",
//     DELIVERY_PERSON = "DELIVERY_PERSON",
//     DEFAULT = "DEFAULT"
// }

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            role?: Roles;
        }
    }
}