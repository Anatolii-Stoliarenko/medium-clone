import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticleComponent } from './components/article.component';
import { EffectsModule } from '@ngrx/effects';
import { GetArticleEffect } from './store/effects/getFeed.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../shared/modules/errorMessage/errorMessage.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { TagListModule } from '../shared/modules/tagList/taglist.module';
import { ArticleService } from './services/article.service';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect';

const routs = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(routs),
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
  ],
  declarations: [ArticleComponent],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
