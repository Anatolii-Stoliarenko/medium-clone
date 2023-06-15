import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PopularTagsComponent } from './component/popularTags.component';
import { PopularTagsService } from './services/PopularTags.service';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagsEffect } from './store/effects/getPopularTags.effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { LoadingModule } from '../loading/loading.module';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule,
    ErrorMessageModule,
    EffectsModule.forFeature([GetPopularTagsEffect]),
    StoreModule.forFeature('tags', reducers),
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class popularTagsModule {}
