import {RoleChecker} from "../../../src/server/RoleChecker";

export class PostAdminRole implements RoleChecker {

    async check(user: any): Promise<boolean> {
        return true;
    }

}