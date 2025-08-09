export type Order = {
    id: string,
    product_id: string,
    user_id: string,
    address_delivery: string,
    status_id: string,
    created_at: string,
    finished_at: string | null,
    img?: string,
}