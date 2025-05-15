import { ROLES_MAP } from "../login/config"


export default () => {
    const username: string = sessionStorage.getItem('username') || ''
    const roles = ROLES_MAP[username]
    return <>
        {`尊敬的${roles}`}
        <h3>欢迎{username}</h3>
    </>
}

// todo  动画