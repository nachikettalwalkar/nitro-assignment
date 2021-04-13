import { Controller, Get } from '@nestjs/common';

import { Post } from '@nitro-assignment/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('posts')
  getData(): Post[] {
    return this.appService.getData();
  }
}
