import { PopularTagType } from './popularTagType';

export interface PopularTagsStateInterface {
  data: PopularTagType[] | null;
  error: string | null;
  isLoading: boolean;
}
