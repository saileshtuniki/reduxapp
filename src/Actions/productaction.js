
import myStore from "../Reduxstore/store";

const productDetailsAction = (productinformation)=>{
    myStore.dispatch ({
        type: "PRODUCT",
        payload: productinformation
    })
}
export default productDetailsAction;