import { Component, OnInit } from '@angular/core';
import { Post, PostsFacade } from '@nitro-assignment/core-data';
import * as moment from 'moment';
import { from, Observable } from 'rxjs';
import { groupBy, mergeMap, reduce, toArray } from 'rxjs/operators';

interface PostNode {
  name: string;
  children: Post[];
}

class UpdatePost {
  constructor(
    public id: number,
    public location: string,
    public time: number,
    public author: string,
    public text: string,
  ) {  }
}

@Component({
  selector: 'nitro-assignment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  posts$: Observable<Post[]>;
  groupedPosts$: Observable<PostNode[]>;
  selectedCategory: string = 'Week';
  postCategories: string[] = ['Week', 'Author', 'Location'];
  model: UpdatePost = null;
  submitted = false;
  hasData = false;

  constructor(private facade: PostsFacade,) {
    this.posts$ = facade.allPosts$;
  }

  ngOnInit() {
    this.getPosts();
    this.renderList();
  }

  getPosts() {
    this.facade.loadPosts();
  }

  radioChange() {
    this.renderList();
  }

  getGroupingKey(post: Post): string {
    switch(this.selectedCategory) {
      case 'Week':
        return moment.unix(post.time).week().toString();
      case 'Author':
        return post['author'];
      case 'Location':
        return post['location'];  
      default:
        return moment.unix(post.time).week().toString();    
    }
  }

  renderList() {
    this.posts$.subscribe((posts) => {
      posts.length ? this.hasData = true : this.hasData = false;
      this.groupedPosts$ = from(posts).pipe(
        groupBy(post => this.getGroupingKey(post), p => p),
        mergeMap(group => group
          .pipe(
            reduce((acc, cur) => {
                acc.children.push(cur);
                return acc;
              },{
                name: group.key, children: []
              }
            ))),toArray()
        );
    });
  }

  showPostDetails(post) {
    this.submitted = false;
    this.model = new UpdatePost(post.id, post.location, post.time, post.author, post.text);
  }

  onSubmit() {
    this.facade.updatePost(this.model as Post);
    this.model = null;
    this.submitted = true;
  }
}
