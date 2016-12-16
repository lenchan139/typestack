import {ObjectType} from "../../common/ObjectType";

export function InjectFetcher<T>(target: ObjectType<T>) {
    return function(object: Object, propertyName: string, index: number) {

    };
}