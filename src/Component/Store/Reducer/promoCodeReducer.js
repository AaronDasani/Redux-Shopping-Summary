import {Promo_Code, EstTotalCalculation} from '../../Actions/Types';

const initialState={
    EstimateTotal:0,
    SubTotal:102.96,
    applyPromoCode:false
};

export default function (state=initialState, action)
{
    switch (action.type) {
        case Promo_Code:
            console.log("Get DISCOUNT noW, ", action.payload)
            
            return{
               ...state,EstimateTotal:(state.SubTotal*0.9),applyPromoCode:true
            };
        
        case EstTotalCalculation:
            console.log(action.payload)
            return {
                ...state,EstimateTotal:action.payload
            };
        default:
            return state;
    }
}

