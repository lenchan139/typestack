import {Fraction} from "../common/Fraction";
import {ParamsBag} from "../common/ParamsBag";

/**
 * Set of parameters that comes into the controller's action.
 */
export interface ActionOptions<T> {

    /**
     * Part of the model that must be selected/used in the app.
     */
    fraction?: Fraction<T>;

    /**
     * Extra set of parameters sent by a client to this action.
     */
    parameters?: ParamsBag;

}