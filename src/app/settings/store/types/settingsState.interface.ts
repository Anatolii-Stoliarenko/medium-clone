import { BackaenErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export interface SettingsStateInterface {
  isSubmitting: boolean;
  validationErrors: BackaenErrorsInterface | null;
}
