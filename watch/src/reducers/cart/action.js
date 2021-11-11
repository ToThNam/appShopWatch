import { ACTION_TYPES } from "./types";
export const addCart = (detail) => {
   return { 
    type: ACTION_TYPES.ADD_CART, 
    detail 
  }
}
export const removeItem =(item)=>{
  return {
    type: ACTION_TYPES.REMOVE_ITEM,
    data: item
  }
}
export const removeAll =()=>{
  return {
    type: ACTION_TYPES.REMOVE_ALL,
  }
}