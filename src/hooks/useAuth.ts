import { isString } from 'lodash';
import { useMemo } from 'react';

export default function useUserRole<T extends string | string[] | undefined>(
    roles?: T,
): T extends string | undefined ? boolean : boolean[] {
    const userRole = sessionStorage.getItem('user');

    const hasRole = useMemo<any>(() => {
        if (!userRole?.length || !roles) {
            return false;
        }

        if (isString(roles)) {
            const result = userRole.includes(roles);
            return result;
        }

        const result = roles.map((role) => userRole.includes(role));

        return result;
    }, [userRole, roles]);

    return hasRole as T extends string | undefined ? boolean : boolean[];
}
