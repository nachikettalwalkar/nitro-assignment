import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  model = 'posts'

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  all() {
    return this.http.get<Post[]>(this.getUrl());
  }

  // TODO: Update the Post when the functionality is extended to support PUT
  // update(post: Post) {
  //   return this.http.put(this.getUrl(), post);
  // }
}
