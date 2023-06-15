import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  range(start: number, end: number): number[] {
    //Array(20) => return empty array with 20 elements
    //[...Array(20)] => return 20 unefined elements]
    //[...Array(20).keys()] => return array with 20 elements [0,1,2,...,19]
    //[...Array(20).keys()].map(el => + 1) => return array with 20 elements [1,2,...,20]
    //[...Array(20).keys()].map(el => + 10) => return array with 20 elements [10,11,...,29]

    return [...Array(end).keys()].map((el) => el + start);
  }
}
