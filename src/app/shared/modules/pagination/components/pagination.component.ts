import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from '../../feed/services/utils.service';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProps: number;
  @Input('limit') limitProps: number;
  @Input('currentPage') currentPageProps: number;
  @Input('url') urlProps: string;

  pagesCount: number;
  pages: number[]; //array items

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    // this.pages = [1,2,3,4,..., this.pagesCount]
    this.pages = this.utilsService.range(1, this.pagesCount);
    // console.log('pages', this.pages);
  }
}
