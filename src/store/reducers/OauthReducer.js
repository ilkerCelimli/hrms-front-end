import {oauth} from '../initalValues'
import {OauthType, ROLE} from '../actions/OauthActions'
const initialState = {
    Oauth : oauth
}
export default function OauthReducer (state =initialState.Oauth , {type,payload} ){

    switch (type) {
        case ROLE.Admin:

            
        
            break;
    
        case ROLE.Employee:
            let 


        default:
            break;
    }

}