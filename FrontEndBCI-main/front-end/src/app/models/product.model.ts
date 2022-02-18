export class ProductModel {
    productId:number;
    description:string;

    constructor(id:number, description:string) {
        this.productId = id;
        this.description = description;
    }
}