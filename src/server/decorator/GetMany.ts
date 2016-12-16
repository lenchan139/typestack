import {ObjectType} from "../../common/ObjectType";
import {Filter} from "../../common/Filter";

export function GetMany<T>(filter?: ObjectType<Filter<T>>) {
    return function(object: Object, methodName: string) {
    };
}