export const actionTypes = {
    INC:'INC_COUNTER',
    DEC:'DEC_COUNTER'
}

export const incCounter = (value)=>{
    console.log(value)
    return {
        type:actionTypes.INC,
        payload:++value
    }
}
export const decCounter = (value)=>{
    return {
        type:actionTypes.DEC,
        payload:--value
    }
}
