import {Promo_Code} from './Types';

export const PromoCodeAction=(event)=>dispatch=>{
    if (event.target.promo_code.value==="DISCOUNT") {
        dispatch({type:Promo_Code,payload:event.target.promo_code.value})
        
    }
    else{
        return;
    }
}