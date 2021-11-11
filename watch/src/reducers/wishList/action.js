import { ACTION_TYPES } from "./types";
export const addList = (detail) => {
   return { 
    type: ACTION_TYPES.ADD_LIST, 
    detail 
  }
}
export const removeItem =(item)=>{
  return {
    type: ACTION_TYPES.REMOVE_ITEM,
    data: item
  }
}
