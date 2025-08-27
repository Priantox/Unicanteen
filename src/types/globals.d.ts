export {}

export type Roles = 'ADMIN' | 'CANTEEN_OWNER' | 'CUSTOMER' | 'DELIVERY_PERSON' | 'DEFAULT';

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            role?: Roles;
        }
    }
}