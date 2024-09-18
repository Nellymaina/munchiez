const ADDTOCART="ADDTOCART"
 function AddToCart(products){

    return {
        type:ADDTOCART,
        payload:products,
    }
}
 



export default AddToCart
export {ADDTOCART}
