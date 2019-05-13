import {EstTotalCalculation} from "./Types";

export const EstTotalCalAction=(amount)=>dispatch=>{
    dispatch({type:EstTotalCalculation,payload:amount})
}