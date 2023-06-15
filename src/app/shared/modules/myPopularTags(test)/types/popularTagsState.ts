import { GetPopularTagsResponsInterface } from './getPopularTagsRespons.interface';

export interface PopularTagsStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetPopularTagsResponsInterface | null;
}
