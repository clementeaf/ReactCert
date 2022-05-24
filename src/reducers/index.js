
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FAVORITE":
            return {
                ...state,
                favoriteCoins: [...state.favoriteCoins, action.payload],
            };
        case "DELETE_FAVORITE":
            return {
                ...state,
                favoriteCoins: state.favoriteCoins.filter(
                    (items) => items.data.id !== action.payload,
                ),
            };
        case "SET_SECTION":
            return {
                ...state,
                sectionActive: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;