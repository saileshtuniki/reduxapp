//if we want dispatch in the action method we have to import the store
//dispatch will take obj as an argument
import myStore from "../Reduxstore/store"

const textaction =  (data) => {
    //dispatch will call reducer's internally
    myStore.dispatch({
        type:"TEXT",
        payload: data,
    })
}

export default textaction