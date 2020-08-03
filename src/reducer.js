export const initialState = {
    basket: [],
    user: null,
};
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
    

    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],

            };

        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];


            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.warn("no product to remove");

            }
            return { ...state, basket: newBasket, };
        case "INCREMENTPRICE":
            
            let increbasket=[...state.basket];
            
            const nind = state.basket.findIndex((basketItem) => basketItem.id === action.inid);
            const iid=increbasket[nind]['id'];
            
            
            if(iid===action.inid){
               increbasket[nind]['price']+=action.inprice;
            }else{
                alert("no item");
            }
        return { ...state, basket: increbasket, };
            
            
            case "DECREMENTPRICE":
            
            let decrebasket=[...state.basket];
            const ind = state.basket.findIndex((basketItem) => basketItem.id === action.did);
            const nid=decrebasket[ind]['id'];
            
            
            if(nid===action.did){
                
                
                decrebasket[ind]['price']-=action.dprice;
            }else{
                alert("no item");
            }
        return { ...state, basket: decrebasket, };
        default:
            return state;
    }
}
export default reducer;