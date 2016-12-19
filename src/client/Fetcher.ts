import {ObjectType} from "../common/ObjectType";
import {Server} from "./Server";
import {Criteria} from "../common/Criteria";
import {Fraction} from "../common/Fraction";
import {ParamsBag} from "../common/ParamsBag";
import {DeepPartial} from "../common/DeepPartial";

/**
 * Used to fetch data from the server controllers.
 */
export class Fetcher<T> {

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------

    constructor(protected server: Server,
                protected target: ObjectType<T>) {
    }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------

    /**
     * Gets one single model by a given id.
     */
    getById(id: any, options?: { role?: string, fraction?: Fraction<T>, params?: ParamsBag }): Promise<T> {
        return this.httpQuery();
    }

    /**
     * Gets array of models by a given array of ids.
     */
    getByIds(ids: any[], options?: { role?: string, fraction?: Fraction<T>, params?: ParamsBag }) : Promise<T[]> {
        return this.httpQuery();
    }

    /**
     * Gets one single model.
     */
    getOne(options?: { criteria: Criteria<T>, role?: string, fraction?: Fraction<T>, params?: ParamsBag }): Promise<T> {
        return this.httpQuery();
    }

    /**
     * Gets many models.
     */
    getMany(options?: { criteria: Criteria<T>, role?: string, fraction?: Fraction<T>, params?: ParamsBag }): Promise<T[]> {
        return this.httpQuery();
    }

    /**
     * Gets array of models and overall number of models that match given criteria (useful for pagination).
     */
    getManyAndCount(options?: { criteria: Criteria<T>, role?: string, fraction?: Fraction<T>, params?: ParamsBag }): Promise<[T[], number]> {
        return this.httpQuery();
    }

    /**
     * Saves given model.
     */
    save(object: T, options?: { role?: string, params?: ParamsBag }): Promise<T>;

    /**
     * Saves given models.
     */
    save(objects: T[], options?: { role?: string, params?: ParamsBag }): Promise<T[]>;

    /**
     * Saves given partial object with the given id.
     */
    save(id: any, partialObject: DeepPartial<T>, options?: { role?: string, params?: ParamsBag }): Promise<T>;

    /**
     * Saves given model.
     */
    save(idOrObject: any|T|T[],
         partialObjectOrOptions?: DeepPartial<T>|{ role?: string, params?: ParamsBag },
         options?: { role?: string, params?: ParamsBag }): Promise<T|T[]> {

        return this.httpQuery();
    }

    /**
     * Removes model by given id.
     */
    remove(object: T, options?: { role?: string, params?: ParamsBag }): Promise<void>;

    /**
     * Removes array of given models.
     */
    remove(objects: T[], options?: { role?: string, params?: ParamsBag }): Promise<void>;

    /**
     * Removes given model or array of models.
     */
    remove(objects: T|T[], options?: { role?: string, params?: ParamsBag }): Promise<void> {
        return this.httpQuery();
    }

    // -------------------------------------------------------------------------
    // Protected Methods
    // -------------------------------------------------------------------------

    protected generateUrl() {
        return this.server.baseUrl + "/" + this.target.name;
    }

    protected httpQuery() {
        return Promise.resolve<any>(null);
    }

}