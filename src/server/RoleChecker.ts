export interface RoleChecker {

    check(user: any): Promise<boolean>;

}