import { ProductModel } from './product.model';

export interface StoreModel {
    id: number;
    owner: string;
    urls: string;
    products: ProductModel[];
    owner_store_name: string;
    owner_store_lcs_type: string;
    owner_store_address: string;
    owner_store_type: string;
}
