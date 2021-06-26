export const initialState = {
    basket: [
        {
            id: 'ff55f',
            title: 'HP 15 (2021) Thin & Light Ryzen 3-3250 Laptop, 8 GB RAM, 1TB HDD, 39.62 cms (15.6") FHD Screen, Windows 10, MS Office (15s-gr0011AU)',
            price: 11.96,
            rating: 5,
            image: 'https://images-na.ssl-images-amazon.com/images/I/41mQtYQUzmL.jpg'

        },
    ],
    USER: null

}
export const getBasketTotal = (basket) => basket?.reducer((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_BASKET":
            return { ...state, basket: [...state.basket, action.item] };
            break;
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                //item exist in basket,remove it..
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `cann't remove product (id ${action.id}) as its not in basket`
                )
            }
            return {
                ...state,
                basket: newBasket
            };
            break;

        default:
            return state;

    }
}
export default reducer;