import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPopularTagsResponsInterface } from '../types/getPopularTagsRespons.interface';
import { Store, select } from '@ngrx/store';
import { getPopularTagsAction } from '../store/actions/getPopularTags.action';
import {
  errorPopularTagsSelector,
  isLoadingPopularTagsSelector,
  tagsPopularTagsSelector,
} from '../store/selectors';

@Component({
  selector: 'my-mc-popular-tags',
  templateUrl: './popularTags.component.html',
  styleUrls: ['./popularTags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  @Output() messageSent: EventEmitter<string> = new EventEmitter<string>();

  tags$: Observable<GetPopularTagsResponsInterface>;
  isLoading$: Observable<Boolean>;
  error$: Observable<string> | null;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValue();
    this.getPopularTags();
  }

  initializeValue() {
    this.tags$ = this.store.pipe(select(tagsPopularTagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingPopularTagsSelector));
    this.error$ = this.store.pipe(select(errorPopularTagsSelector));
  }

  getPopularTags() {
    const url: string = 'tags';
    this.store.dispatch(getPopularTagsAction({ url: url }));
  }

  sendMessage(buttonId: string) {
    const message = `/articles?=${buttonId}&limit=10&offset=0`;
    this.messageSent.emit(message);
    console.log(message);
  }
}
