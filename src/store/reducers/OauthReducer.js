import {
   role
} from '../actions/RoleActions';
import {
    initialRole
} from '../InitialStates'
const initialState = {
    ROLE: initialRole
}

const oauth = role
export default function OauthReducer(state = initialState, {
    type,
}) {

   switch (type) {
       case "ADMIN":
         
      state.ROLE.Role = role.Admin

           return {state}

           
   
           case "EMPLOYER":
               state.ROLE.Role = role.Employer
            return {...state}


            case "EMPLOYEE" : 
            state.ROLE.Role = role.Employee

            return {...state}

       default:

       return state.ROLE.Role = "VISITER"

           
   }

    

}