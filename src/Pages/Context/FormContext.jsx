import React, { Children, createContext,useContext,useReducer } from 'react';
import FormReducer, { initialState } from '../Reducer/FormReducer';

export const FormContext = createContext();



const FormContextProvider = ({children}) => {

const [state,dispatch] = useReducer(FormReducer,initialState);

// const context = {}

  return (
   <FormContext.Provider value={{...state,dispatch}}>
    {children}
   </FormContext.Provider>
  )
}


export const useFormContext = ()=>useContext(FormContext)



export default FormContextProvider