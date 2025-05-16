import { isArray } from "lodash";
import { useMemo } from "react";
import useAuth from '@/hooks/useAuth'

type permissionBtnProps = {
    roles: string[] | string;
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

export default (props: permissionBtnProps) => {
    const { roles, children, fallback } = props;

    const rolesProp: string[] = isArray(roles) ? roles : [roles]
    const userRoles = useAuth(rolesProp)

    const hasPermission = useMemo(() => {
        return userRoles.some(i => i)
    }, [userRoles, rolesProp])
    return hasPermission ? children : fallback ? fallback : null
}