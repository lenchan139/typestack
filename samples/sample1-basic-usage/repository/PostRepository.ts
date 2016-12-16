import {Service} from "typedi";
import {Repository} from "typeorm";
import {Post} from "../model/Post";
import {OrmRepository} from "typeorm-typedi-extensions";

@Service()
export class PostRepository {

    constructor(@OrmRepository(Post) private ormRepository: Repository<Post>) {
    }

    findById(id: number) {
        return this.ormRepository.findOneById(id);
    }

    findByIds(ids: number[]) {
        return this.ormRepository.findByIds(ids);
    }

}