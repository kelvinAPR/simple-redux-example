const INIT_STATE = {
    user_id: 'kelvin'
}

export default (state = INIT_STATE, payload) => {
    switch (payload.type) {
        case 'add_user':{
            return {
                user_id: payload.user_id
            }
        }    
        default:
            return state;
    }
}