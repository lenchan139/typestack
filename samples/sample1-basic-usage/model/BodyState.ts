export class BodyState {

    id: number;
    name: string;
    shortName: string;
    information: string;

    systematics: {
        id: number;
        name: string;
        group: {
            id: number;
            name: string;
        };
    }[];

    categories: {
        id: number;
        name: string;
        group: {
            id: number;
            name: string;
        };
    }[];

    humanParameters: {
        id: number;
        name: string;
        group: {
            id: number;
            name: string;
        };
    }[];

    intranosologies: {
        id: number;
        name: string;
        group: {
            id: number;
            name: string;
        };
    }[];

}