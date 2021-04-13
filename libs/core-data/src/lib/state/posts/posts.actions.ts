import { Action } from '@ngrx/store';
import { Post } from '@nitro-assignment/core-data';

export enum PostsActionTypes {
  LoadPosts = '[Posts] Load Data',
  PostsLoaded = '[Posts] Data Loaded',
  UpdatePost = '[Posts] Data Updated',
}

export class LoadPosts implements Action {
  readonly type = PostsActionTypes.LoadPosts;
  constructor() {}
}

export class PostsLoaded implements Action {
  readonly type = PostsActionTypes.PostsLoaded;
  constructor(public payload: any) {}
}

export class UpdatePost implements Action {
  readonly type = PostsActionTypes.UpdatePost;
  constructor(public payload: Post) { }
}

export type PostsActions = LoadPosts | PostsLoaded | UpdatePost;
