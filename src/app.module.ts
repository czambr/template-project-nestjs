import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { appRoutes } from './app.routes';
import { AppController } from './app.controller';

import { ApiModule } from './api/api.module';

@Module({
  imports: [
    RouterModule.register(appRoutes),

    // ==> Module of api endpoints
    ApiModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
