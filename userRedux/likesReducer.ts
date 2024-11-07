import { enumLikes } from "../userRedux/enumLikes";

export interface ILikeAction {
  type: enumLikes,
  payload: number[]
}


export const likesReducer = ( state: number[] = [], action: ILikeAction  ) => {
  switch(action.type) {
    case enumLikes.LIKES_LIST: 
    return action.payload
    default:
    return state
  }
}