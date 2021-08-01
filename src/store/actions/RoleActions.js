export const AdminRole = "ADMIN"
export const EmployerRole = "EMPLOYER"
export const EmployeeRole = "EMPlOYEE"

export const AdminOauth = () => {
    return {
        type: AdminRole
    }
}

export const EmployerOauth = () => {
    return {
        type: EmployerRole
    }
}

export const EmployeeOauth = () => {
    return {
        type : EmployeeRole
    }
}