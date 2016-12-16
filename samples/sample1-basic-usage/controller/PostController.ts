import {Service} from "typedi";
import {Post} from "../model/Post";
import {PostByNameCriteria} from "../criteria/PostCriteria";
import {PostFilter} from "../filter/PostFilter";
import {PostRepository} from "../repository/PostRepository";
import {Controller} from "../../../src/server/decorator/Controller";
import {GetById} from "../../../src/server/decorator/GetById";
import {ActionFraction} from "../../../src/server/decorator/ActionFraction";
import {Fraction, RemoveOne} from "../../../src/index";
import {ActionParams} from "../../../src/server/decorator/ActionParams";
import {ParamsBag} from "../../../src/common/ParamsBag";
import {GetByIds} from "../../../src/server/decorator/GetByIds";
import {GetOne} from "../../../src/server/decorator/GetOne";
import {GetMany} from "../../../src/server/decorator/GetMany";
import {GetManyAndCount} from "../../../src/server/decorator/GetManyAndCount";
import {SaveOne} from "../../../src/server/decorator/SaveOne";
import {RemoveMany} from "../../../src/server/decorator/RemoveMany";
import {Upload} from "../../../src/server/decorator/Upload";
import {GetAction} from "../../../src/server/decorator/GetAction";
import {PostAction} from "../../../src/server/decorator/PostAction";
import {RemoveAction} from "../../../src/server/decorator/RemoveAction";

@Service()
@Controller(Post)
export class PostController {

    constructor(private postRepository: PostRepository) {
    }

    @GetById()
    getOneById(id: number, @ActionFraction() fraction?: Fraction<Post>, @ActionParams() params?: ParamsBag): Promise<Post> {
        // returns one post by id
        // options.fraction is optional and can be used to extract only object's partial
        // options.parameters are optional data object with any data inside which can be sent by a client
        return this.postRepository.findById(id);
    }

    @GetByIds()
    getOneByIds(ids: number[], @ActionFraction() fraction?: Fraction<Post>, @ActionParams() params?: ParamsBag): Promise<Post[]> {
        // returns many posts by a given ids
        // fraction is optional and can be used to extract only object's partial
        // parameters are optional data object with any data inside which can be sent by a client
        return this.postRepository.findByIds(ids);
    }

    @GetOne(PostByNameCriteria)
    oneByPostCriteria(criteria: PostByNameCriteria, @ActionFraction() fraction?: Fraction<Post>, @ActionParams() params?: ParamsBag) {
        // returns one post by given criteria
    }

    @GetMany()
    many() {
        // returns array of posts without filter being set
    }

    @GetMany(PostFilter)
    manyByPostFilter(filter: PostFilter, @ActionFraction() fraction?: Fraction<Post>, @ActionParams() params?: ParamsBag) {
        // returns array of posts without filter being set
    }

    @GetManyAndCount()
    manyAndCount(@ActionFraction() fraction?: Fraction<Post>, @ActionParams() params?: ParamsBag) {
        // returns array of posts + overall number of posts
    }

    @GetManyAndCount(PostFilter)
    manyAndCountByPostFilter(filter: PostFilter, @ActionFraction() fraction?: Fraction<Post>, @ActionParams() params?: ParamsBag) {
        // returns array of posts + overall number of posts that matched given filter
    }

    @SaveOne()
    save(post: Post, /* you can use custom decorators: @SessionUser() user: User, */@ActionParams() params?: ParamsBag) {
        // just saves the post. can save post completely and partially
        // it can be used for partial updates of the Post object
    }

    @RemoveOne()
    removeOne(id: number, @ActionParams() params?: ParamsBag) {
        // remove one post by given id
    }

    @RemoveMany()
    removeMany(ids: number[], @ActionParams() params?: ParamsBag) {
        // remove many posts by given ids
    }

    @Upload()
    upload(data: any, @ActionParams() params?: ParamsBag) {
        // uploads a post if its a file
    }

    @GetAction("GET_SOMETHING_SPECIAL")
    getSomethingSpecial(@ActionParams() params?: ParamsBag) {
    }

    @PostAction("POST_SOMETHING_SPECIAL")
    postSomethingSpecial(body: any, @ActionParams() params?: ParamsBag) {
    }

    @RemoveAction("DELETE_SOMETHING_SPECIAL")
    removeSomethingSpecial(@ActionParams() params?: ParamsBag) {
    }

}