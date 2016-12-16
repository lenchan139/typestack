import {ObjectType} from "../../common/ObjectType";
import {Filter} from "../../common/Filter";

export function GetManyAndCount<T>(filter?: ObjectType<Filter<T>>) {
    return function(object: Object, methodName: string) {
    };
}