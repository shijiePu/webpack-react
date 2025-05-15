
interface UserRoles {
    [key: string]: string; // 字符串索引签名
    admin: string;
    user: string;
  }

const ROLES_MAP:UserRoles = {
    'admin': '超级会员',
    'user': '普通用户'
}

export { ROLES_MAP } 