import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionsTypes';
import { GetPopularTagsResponsInterface } from '../../types/getPopularTagsRespons.interface';

export const getPopularTagsAction = createAction(
  ActionTypes.GET_TAGS,
  props<{ url: string }>()
);

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_TAGS_SUCCESS,
  props<{ tags: GetPopularTagsResponsInterface }>()
);

export const getPopularTagsFailureAction = createAction(
  ActionTypes.GET_TAGS_FAILURE
);
