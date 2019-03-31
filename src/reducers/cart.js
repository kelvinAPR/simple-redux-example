const INIT_STATE = {
    cart: ['test'],
    currentMenu: '2'
};

export default (state = INIT_STATE, payload) => {
    switch (payload.type) {
        case 'add': {
            return {
                cart: [...state.cart, payload.item]
            }
        }
        case 'remove':
            return [...state]
        default:
            return state
    }
}