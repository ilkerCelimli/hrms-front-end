import AdminPanel from '../../pages/AdminPanel'
import {
    AdminRole,
    EmployeeRole,
    EmployerRole
} from '../actions/RoleActions'
import { initialRole } from '../InitialStates'

const default_role_state = initialRole.Role

const reducer = (state = default_role_state, type) => {

    switch (type) {
        case AdminRole:

            return <AdminPanel/>



        case EmployeeRole:

            return state = EmployeeRole

            

        case EmployerRole:

            return state = EmployerRole



         
        default:
            return state;
    }
}

export default reducer