import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { PopularTagsModule } from '../shared/modules/popularTags/popularTags.module';
import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggler.module';
import { TagFeedComponent } from './components/tagFeed.component';

const routs = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routs),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  declarations: [TagFeedComponent],
})
export class TagFeedModule {}
