import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Post } from '../../posts/post.model';
import { PostsActions, PostsActionTypes } from './posts.actions';

export interface PostsState extends EntityState<Post> {}

export const adapter: EntityAdapter<Post> = createEntityAdapter<Post>();
export const initialState: PostsState = adapter.getInitialState();

export function postsReducer(
  state = initialState,
  action: PostsActions
): PostsState {
  console.log(action);
  switch (action.type) {
    case PostsActionTypes.PostsLoaded:
      return adapter.setAll(action.payload, state);
    case PostsActionTypes.UpdatePost:
      return adapter.updateOne({id: action.payload.id, changes: action.payload}, state);
    default:
      return state;
  }
}

// get the selectors
const { selectAll } = adapter.getSelectors();

// select the array of widgets
export const selectAllPosts = selectAll;
