import React from 'react'

export const initialState = {
    obj:{
        key1:1,
        key2:2,
        key3:3,   
    },
serviceName:'',
noOfMades:'',
noOfHours:'',
totalPrice:'',
selectedDate:'',
selectedTime:''
}

const FormReducer = (state,{type,payload}) => {
  

    switch (type) {
        case 'UpdateFormValue':

            return {
                ...state,
                [payload.key]:payload.value
            }
            
            break;
    
        default:
            break;
    }
  
}

 const UpdateFormValue = 'UpdateFormValue' 

 export {UpdateFormValue}
export default FormReducer