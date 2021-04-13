import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPosts from './posts/posts.reducers';

// Updated the shape of the entire application state
export interface AppState {
  posts: fromPosts.PostsState,
}
// Add in feature reducer into combined reducer
export const reducers: ActionReducerMap<AppState> = {
  posts: fromPosts.postsReducer,
};

// -------------------------------------------------------------------
// POSTS SELECTORS
// -------------------------------------------------------------------
export const selectPostsState = createFeatureSelector<fromPosts.PostsState>('posts');

export const selectAllPosts = createSelector(
  selectPostsState,
  fromPosts.selectAllPosts
);
