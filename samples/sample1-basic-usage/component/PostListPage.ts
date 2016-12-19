import {Post} from "../model/Post";
import {InjectFetcher} from "../../../src/client/decorators/InjectFetcher";
import {Fetcher} from "../../../src/client/Fetcher";
import {PostFilterCriteria} from "../filter/PostFilter";

export class PostListPage {

    postCount: number;
    posts: Post[];
    post: Post;

    constructor(@InjectFetcher(Post) private postFetcher: Fetcher<Post>) {
    }

    async ngOnInit() {
        // we can simply get list of posts
        const filter = new PostFilterCriteria();
        this.posts = await this.postFetcher.getMany(filter);
    }

    async save() {
        const post = new Post();

        // we can save object
        await this.postFetcher.save(post);

        // we can update it partial
        await this.postFetcher.save(post.id, {
            title: "dasda"
        });

        const a = {
            post: []
        };
    }

}