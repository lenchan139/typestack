import {ObjectType} from "../../common/ObjectType";

export function Controller<T>(model: ObjectType<T>) {
    return function(target: Function) {
        // todo: in the future need Controller to register service in typedi by its own
    };
}