import {oauth} from '../initalValues'
import {ROLE} from '../actions/OauthActions'
const initialState = {
    Oauth : oauth
}
export default function OauthReducer (state =initialState.Oauth , {type,payload} ){

    switch (type) {
        case ROLE:
       
        
            break;
    
        default:
            break;
    }

}