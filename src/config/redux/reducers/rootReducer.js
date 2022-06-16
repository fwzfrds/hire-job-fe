import {combineReducers} from 'redux'
import userReducer from './userReducer'
import recruiterReducer from './recruiterReducers'
// import adminReducer from './adminReducer'
// import { productsReducer, detailProdReducer } from './productsReducer'

const rootReducer = combineReducers({
    users: userReducer,
    recruiters: recruiterReducer
    // admin: adminReducer,
    // products: productsReducer,
    // productDetail: detailProdReducer
})

export default rootReducer