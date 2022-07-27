import {combineReducers} from 'redux'
import { userReducer, userDetailReducer, userSkillReducer, userExperienceReducer, userPortfolioReducer } from './userReducer'
import recruiterReducer from './recruiterReducers'
// import adminReducer from './adminReducer'
// import { productsReducer, detailProdReducer } from './productsReducer'

const rootReducer = combineReducers({
    users: userReducer,
    recruiters: recruiterReducer,
    userDetail: userDetailReducer,
    userSkill: userSkillReducer,
    userExperience: userExperienceReducer,
    userPortfolio: userPortfolioReducer
    // admin: adminReducer,
    // products: productsReducer,
    // productDetail: detailProdReducer
})

export default rootReducer