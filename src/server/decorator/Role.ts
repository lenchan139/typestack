import {ObjectType} from "../../common/ObjectType";

export function Role<T>(roleChecker: ObjectType<T>) {
    return function(object: Object, methodName: string) {
    };
}