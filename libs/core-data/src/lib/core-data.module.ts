import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { StateModule } from './state/state.module';
import { PostsService } from './posts/posts.service';

export const coreDataRoutes: Route[] = [];

@NgModule({
  providers: [PostsService],
  imports: [CommonModule, RouterModule, StateModule],
})
export class CoreDataModule {}
