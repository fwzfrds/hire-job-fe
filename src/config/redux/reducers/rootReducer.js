import {combineReducers} from 'redux'
import { userReducer, userDetailReducer, userSkillReducer } from './userReducer'
import recruiterReducer from './recruiterReducers'
// import adminReducer from './adminReducer'
// import { productsReducer, detailProdReducer } from './productsReducer'

const rootReducer = combineReducers({
    users: userReducer,
    recruiters: recruiterReducer,
    userDetail: userDetailReducer,
    userSkill: userSkillReducer
    // admin: adminReducer,
    // products: productsReducer,
    // productDetail: detailProdReducer
})

export default rootReducer