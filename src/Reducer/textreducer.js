
// Reducer :
//1. Its is a simple JS Function 
//2. It takes 2 parameters they are initial data (It can be any format) and it takes on object (action) 
//   --> 1 parameter- data in any format i.e sting/integer/boolean/obj etc. 
//   --> 2 parameter should always be an object
//3. it need to be exported and imported in redux file.
//Here, state is an initial state so we can store any type of data.

// Payload stores the additional information about what happened. 
// It is not a compulsion to include “payload” in the object. 
// It is entirely up to you but we should always try to pass only the necessary information to the action object
// and try to keep it as light as possible.

let initialdata ={
    name: "Dummy name",
    city: "Dummy City",
    productData: "",
}
// const textReducer = (state = "Sailesh T", action) => {
const textReducer = (defaultstoredata = initialdata, action) => {
        switch(action.type){
            case "TEXT":
                // state = action.payload
                // break;
                defaultstoredata ={
                    ...initialdata,
                    name: action.payload,
                };
                break;
                //If the case is product we have to store the data in the "store"
            case "PRODUCT":
                defaultstoredata ={
                   ...initialdata,
                   productData: action.payload, 
                }
                break;


        }

    return defaultstoredata
}

export default textReducer