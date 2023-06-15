<=============Router============>
/**
import { ActivatedRoute, Params, Router } from '@angular/router';
 
[routerLink]="urlProps" //urlProps = '/articles'
[queryParams]="{ page: page }" // 'articles' + '?page={1..n}' create url: articles?page=1, articles?page=2, ... , articles?page=n

constructor(private route: ActivatedRoute){}
route.queryParams.subscribe(
      (params: Params) => {
        console.log('params', params);
        this.currentPage = Number(params['page'] || '1'); //Number(params.page || '1')
      }
    ); //subscribe to route and detect number of page: page = 1, page = 2,..., page = n We take 1,2 or n
 

 query-strin - popular library fo parse and stringify urls. We need it for determining url and congatonations with our props parametres
For axample: we need add ?offset=offset&limit=limit to 'articles/', but 'articles/' can be changes on 'bar/foo/' 
 npm install query-string
 
 parseedUrl = '/foo?bar=1' => {query: {bar: '1'}, url: '/foo'}

 npm install @ngrx/router-store --save - library for menage routers in our aplications 
 
    */
/*
const queryString = 'key1=value1&key2=value2';
const parsedQuery = testQuery.parse(queryString);
console.log(parsedQuery);
// Output: { key1: 'value1', key2: 'value2' }

const obj = { key1: 'value1', key2: 'value2' };
const stringifiedQuery = testQuery.stringify(obj);
console.log(stringifiedQuery);
// Output: 'key1=value1&key2=value2'

export Component is requed only when we need use on different level routs!!!
*/