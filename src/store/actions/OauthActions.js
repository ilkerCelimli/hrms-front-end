import { initialOauth } from "../initalValues"

export const ROLE  = {
    Admin : "ADMIN",
    Employer : "EMPLOYER",
    Employee : "EMPLOYEE",
    VISITER : "VISITER"
}

export function OauthType(role) {

    return {
        type : ROLE,
        payload : role,
        

}
}