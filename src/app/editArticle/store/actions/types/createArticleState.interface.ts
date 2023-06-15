import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { BackaenErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export interface EditArticleStateInterface {
  isLoading: boolean;
  article: ArticleInterface | null;
  isSubmitting: boolean;
  vlidationErrors: BackaenErrorsInterface | null;
}
