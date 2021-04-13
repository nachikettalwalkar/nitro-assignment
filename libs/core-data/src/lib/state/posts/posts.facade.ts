import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as PostsActions from './posts.actions';
import { PostsState } from './posts.reducers';
import { selectAllPosts } from '..';

@Injectable({
  providedIn: 'root'
})
export class PostsFacade {
  allPosts$ = this.store.pipe(select(selectAllPosts));

  constructor(private store: Store<PostsState>) {}

  loadPosts() {
    this.store.dispatch(new PostsActions.LoadPosts());
  }

  updatePost(post) {
    this.store.dispatch(new PostsActions.UpdatePost(post));
  }
}
