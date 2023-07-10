import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getFeedAction } from '../store/actions/getFeed.action';
import { Observable, Subscription } from 'rxjs';
import { GetFeedResponseInterface } from '../types/getFeedResponce.interface';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../store/selectors';
import { ActivatedRoute, Params, Router } from '@angular/router';

// import { parseUrl, stringify } from 'query-string';
import testQuery from 'query-string';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  @Input('apiUrl') apiUrlProps: string;

  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  feed$: Observable<GetFeedResponseInterface | null>;
  limit: number = 10;
  baseUrl: string;
  queryParamsSubsrciption: Subscription;
  currentPage: number;
  color: string = 'primary';

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchFeed();
    this.initializeListeners();
    console.log('initialized feed');
  }

  ngOnDestroy(): void {
    this.queryParamsSubsrciption.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('changes', changes);
    const isApiUrlChaged =
      !changes['apiUrlProps'].firstChange &&
      changes['apiUrlProps'].currentValue !==
        changes['apiUrlProps'].previousValue;
    // console.log('isApiUrlChanged', isApiUrlChaged);
    if (isApiUrlChaged) {
      this.fetchFeed();
    }
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.baseUrl = this.router.url.split('?')[0]; //all befor "?"
  }

  //retrive current page
  initializeListeners(): void {
    this.queryParamsSubsrciption = this.route.queryParams.subscribe(
      (params: Params) => {
        //params: http://..../?page=10 => { page=10 }
        this.currentPage = Number(params['page'] || '1');
        this.fetchFeed();
      }
    );
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    //parseUrl('/foo?bar=1') => {query: {bar: '1'}, url: '/foo'}
    const parsedUrl = testQuery.parseUrl(this.apiUrlProps);
    //if currentUser = 1 => "limit=10&offset=0"
    const stringifiedParams = testQuery.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    //apiUrlWithParams = /articles?limit=10&offset=0&tag=cogo if popularTag cogo
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
  }
}

/*
const queryString = 'key1=value1&key2=value2';
const parsedQuery = testQuery.parse(queryString);
console.log(parsedQuery);
// Output: { key1: 'value1', key2: 'value2' }

const obj = { key1: 'value1', key2: 'value2' };
const stringifiedQuery = testQuery.stringify(obj);
console.log(stringifiedQuery);
// Output: 'key1=value1&key2=value2'
*/
