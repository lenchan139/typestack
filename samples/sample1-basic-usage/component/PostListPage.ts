import {Post} from "../model/Post";
import {InjectFetcher} from "../../../src/client/decorators/InjectFetcher";
import {Fetcher} from "../../../src/client/Fetcher";

export class PostListPage {

    postCount: number;
    posts: Post[];
    post: Post;

    constructor(@InjectFetcher(Post) private postFetcher: Fetcher<Post>) {
    }

    async ngOnInit() {

        // we can get collection of posts - posts that matched filter and overall number of posts (useful for pagination)
        [this.posts, this.postCount] = await this.postFetcher.getManyAndCount();

        // we can simply get list of posts
        this.posts = await this.postFetcher.getMany();

        // we can get a single post by id
        this.post = await this.postFetcher.getById(1);

        // we can get a single post by custom criteria
        this.post = await this.postFetcher.getOne({

        }, {
            title: true,
            category: {
                id: true,
                name: false
            }
        });

        return
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