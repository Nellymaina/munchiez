const CHECKOUT="CHECKOUT"
 export default function checkout(products){

    return {
        type:CHECKOUT,
        payload:products,
    }
}
 



export {CHECKOUT}

