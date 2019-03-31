import cart from './cart';
import auth from './auth'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    cart, 
    auth
})

export default rootReducer;