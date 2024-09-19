const UPDATEAMOUNT='UPDATEAMOUNT'
export default function updateAmount(product){
    return {
        type:UPDATEAMOUNT,
        payload:product
    }
}
export {UPDATEAMOUNT}