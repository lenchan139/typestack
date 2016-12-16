import {ObjectType} from "../common/ObjectType";
import {Server} from "./Server";
import {Criteria} from "../common/Criteria";
import {Filter} from "../common/Filter";
import {Fraction} from "../common/Fraction";

type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};

export class Fetcher<T> {

    constructor(protected server: Server,
                protected target: ObjectType<T>) {
    }

    getById(id: any, fraction?: Fraction<T>): Promise<T> {
        return this.httpQuery();
    }

    getByIds(ids: any[]) : Promise<T[]> {
        return this.httpQuery();
    }

    getOne(criteria: Criteria<T>, fraction?: Fraction<T>): Promise<T> {
        return this.httpQuery();
    }

    getMany(fraction?: Fraction<T>): Promise<T[]>;
    getMany(filter: Filter<T>): Promise<T[]>;
    getMany(filter: Filter<T>, fraction: Fraction<T>): Promise<T[]>;
    getMany(filterOrFraction?: Filter<T>|Fraction<T>, fraction?: Fraction<T>): Promise<T[]> {
        return this.httpQuery();
    }

    getManyAndCount(): Promise<[T[], number]>;
    getManyAndCount(fraction: Fraction<T>): Promise<[T[], number]>;
    getManyAndCount(filter: Filter<T>): Promise<[T[], number]>;
    getManyAndCount(filter: Filter<T>, fraction: Fraction<T>): Promise<[T[], number]>;
    getManyAndCount(filterOrFraction?: Filter<T>|Fraction<T>, fraction?: Fraction<T>): Promise<[T[], number]> {
        return this.httpQuery();
    }

    save(object: T): Promise<T>;
    save(id: any, partialObject: DeepPartial<T>): Promise<T>;
    save(idOrObject: any|T, partialObject?: DeepPartial<T>): Promise<T> {
        return this.httpQuery();
    }

    saveMany(objects: T[]): Promise<T[]>;
    saveMany(ids: any[], partialObjects: DeepPartial<T[]>): Promise<T[]>;
    saveMany(idsOrObject: any[]|T[], partialObjects?: DeepPartial<T[]>): Promise<T[]> {
        return this.httpQuery();
    }

    remove(object: T): Promise<void> {
        return this.httpQuery();
    }

    removeMany(objects: T[]): Promise<void> {
        return this.httpQuery();
    }

    protected generateUrl() {
        return this.server.baseUrl + "/" + this.target.name;
    }

    protected httpQuery() {
        return Promise.resolve<any>(null);
    }

}