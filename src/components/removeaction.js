const REMOVEFROMCART="REMOVEFROMCART"
 function RemoveFromCart(products){
    return {
        type:REMOVEFROMCART,
        payload:products
    }
}
 



export default RemoveFromCart
export {REMOVEFROMCART}
