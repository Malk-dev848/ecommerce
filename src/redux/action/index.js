//import Product from "../../component/Product";

//For Add Item to Cart
export const addCart = (Product) =>{
    return{
        type: "ADDITEM",
        payload: Product
    }
}
//For Delete Item From Cart
export const delCart = (Product) =>{
    return{
        type: "DELITEM",
        payload: Product
    }
   
}
/* export const delItem = (Product) =>{
        return{
            type: "DELITEM",
            payload: Product
        }}*/