import { combineReducers } from "redux";
import reducer from './reducers/OauthReducer'


const rootReducer = combineReducers({

    roles : reducer

})

export default rootReducer