export const ROLE  = "ADMIN"

export function OauthType(role) {

    return {
        type : ROLE,
        payload : role,
        

}
}