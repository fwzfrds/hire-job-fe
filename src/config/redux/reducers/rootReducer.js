import {combineReducers} from 'redux'
import userReducer from './userReducer'
// import adminReducer from './adminReducer'
// import { productsReducer, detailProdReducer } from './productsReducer'

const rootReducer = combineReducers({
    users: userReducer,
    // admin: adminReducer,
    // products: productsReducer,
    // productDetail: detailProdReducer
})

export default rootReducer