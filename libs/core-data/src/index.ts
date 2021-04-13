export * from './lib/core-data.module';
export { Post } from './lib/posts/post.model';
export { PostsService } from './lib/posts/posts.service';
export { PostsFacade } from './lib/state/posts/posts.facade';

// Expose Posts state
export { PostsState, selectAllPosts } from './lib/state/posts/posts.reducers';
export { LoadPosts } from './lib/state/posts/posts.actions';
