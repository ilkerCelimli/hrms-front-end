import { combineReducers } from "redux";
import OauthReducer from './reducers/OauthReducer'


const rootReducer = combineReducers({

    roles : OauthReducer

})

export default rootReducer