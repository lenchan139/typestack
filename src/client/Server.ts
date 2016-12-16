import {Fetcher} from "./Fetcher";
import {ObjectType} from "../common/ObjectType";

export class Server {

    baseUrl: string;

    getFetcher<T>(cls: ObjectType<T>): Fetcher<T> {
        return new Fetcher(this, cls);
    }

}