import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getPopularTagsAction } from '../store/actions/getPopularTags.action';
import { Observable } from 'rxjs';
import { PopularTagType } from 'src/app/shared/types/popularTagType';
import {
  errorSelector,
  isLoadingSelector,
  poplarTagsSelector,
} from '../store/selectors';

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null>;
  isLoading$: Observable<Boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
  }

  fetchData() {
    this.store.dispatch(getPopularTagsAction());
  }

  initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.popularTags$ = this.store.pipe(select(poplarTagsSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }
}
