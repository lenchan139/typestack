import {Criteria} from "../../common/Criteria";
import {ObjectType} from "../../common/ObjectType";

export function GetOne<T>(criteria?: ObjectType<Criteria<T>>) {
    return function(object: Object, methodName: string) {
    };
}