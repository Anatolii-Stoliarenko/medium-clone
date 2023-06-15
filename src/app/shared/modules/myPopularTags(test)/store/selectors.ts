import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { PopularTagsStateInterface } from '../types/popularTagsState';

export const popularTagsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  PopularTagsStateInterface
>('tags');

export const isLoadingPopularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.isLoading
);

export const errorPopularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.error
);

export const tagsPopularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: PopularTagsStateInterface) => popularTagsState.data
);
