import { actionTypes } from '../actions'
export const counterReducer = (state = 0, action) => {
    console.log(state)
    switch (action.type) {
        case actionTypes.INC:
        case actionTypes.DEC: {
            return  action.payload 
        }
        case actionTypes.ADD : {
            return state.counter+action.payload
        }
        default :{
            return state
        }
    }
    
}