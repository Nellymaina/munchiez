const DELETEALL='DELETEALL'

export default function deleteFromCart(products){
    return{
        type:DELETEALL,
        payload:products
    }
}

export {DELETEALL}