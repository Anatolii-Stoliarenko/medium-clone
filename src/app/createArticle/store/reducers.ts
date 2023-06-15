import { Action, createReducer, on } from '@ngrx/store';
import { CreateArticleStateInterface } from './actions/types/createArticleState.interface';
import {
  createArticleAction,
  createArticleFauilreAction,
  createArticleSuccessAction,
} from './actions/createArticle.action';

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  vlidationErrors: null,
};

const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    createArticleSuccessAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    createArticleFauilreAction,
    (state, action): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      vlidationErrors: action.errors,
    })
  )
);

export function reducers(state: CreateArticleStateInterface, action: Action) {
  return createArticleReducer(state, action);
}
