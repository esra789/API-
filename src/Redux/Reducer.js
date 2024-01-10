import { GETPRODUCT, REMOVEPRODUCT, UPDATEPRODUCT } from "./Actiontype"

const initialState = {
    products:[]
}

export const reducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GETPRODUCT:
    return { ...state,products: payload}
  case REMOVEPRODUCT:
    return{ ...state,products:state.products.filter(e=>e.id!==payload)}
    case UPDATEPRODUCT:
        return{ ...state,products:state.products.map(e=>e.id===payload.id? e=payload.data:e)}
  default:
    return state
  }
}
