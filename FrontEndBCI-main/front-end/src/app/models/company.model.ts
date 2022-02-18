import { ProductModel } from "./product.model";

export class CompanyModel {

    id: string;
    regionId = null;
    comunaId: string = null;
    address: string;
    products: ProductModel[] = [];
    selectedProducts: string[] = [];
    salesAmountId: number;

    constructor() {
        
    }

    addProductValues(products: number[], selectedProducts: string[], description: string = "") {
        
        selectedProducts.forEach( selectedProduct => {
            if (selectedProduct.trim() == "Otro")
                this.selectedProducts.push("Otro: " + description);
            else
                this.selectedProducts.push(selectedProduct.trim());
        });

        products.forEach(product => {
            console.log(product);
            if (product == 5) //Si se marca la opción de otro, se toma el valor del texto ingresado
                this.products.push(new ProductModel(product, description));            
            else
                this.products.push(new ProductModel(product, ""));
                
        });
    }

}