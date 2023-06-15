import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../ActionTypes';
import { PopularTagType } from 'src/app/shared/types/popularTagType';

export const getPopularTagsAction = createAction(ActionTypes.GET_TAGS);

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_TAGS_SUCCESS,
  props<{ popularTags: PopularTagType[] }>()
);
export const getPopularTagsFailureAction = createAction(
  ActionTypes.GET_TAGS_FAILURE
);
