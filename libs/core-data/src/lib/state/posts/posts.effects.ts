import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';

import { Post } from '../../posts/post.model';
import { PostsService } from '../../posts/posts.service';
import { PostsActionTypes, PostsLoaded, LoadPosts } from './posts.actions';
import { PostsState } from './posts.reducers';

@Injectable()
export class PostsEffects {
  @Effect()
  loadPosts$ = this.dataPersistence.fetch(PostsActionTypes.LoadPosts, {
    run: (action: LoadPosts, state: PostsState) => {
      return this.postsService.all().pipe(map((res: Post[]) => new PostsLoaded(res)))
    },

    onError: (action: LoadPosts, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PostsState>,
    private postsService: PostsService
  ) {}
}