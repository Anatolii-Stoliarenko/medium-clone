import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, filter, map } from 'rxjs';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { BackaenErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import {
  articleSelector,
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { ActivatedRoute } from '@angular/router';
import { getArticleAction } from '../../store/actions/getArticle.action';
import { updateArticleAction } from '../../store/actions/updateArticle.action';

@Component({
  selector: 'mc-edit-article',
  templateUrl: './editArticle.component.html',
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface>;
  isLoading$: Observable<boolean>;
  slug: string;
  isSubmitting$: Observable<boolean>;
  backandErrors$: Observable<BackaenErrorsInterface | null>;

  constructor(private store: Store, private rout: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.slug = this.rout.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backandErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        };
      })
    );
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  onSubmit(articleInput: ArticleInputInterface) {
    this.store.dispatch(updateArticleAction({ slug: this.slug, articleInput }));
  }
}
