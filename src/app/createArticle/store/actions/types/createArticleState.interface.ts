import { BackaenErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export interface CreateArticleStateInterface {
  isSubmitting: boolean;
  vlidationErrors: BackaenErrorsInterface | null;
}
