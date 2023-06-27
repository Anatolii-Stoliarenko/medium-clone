import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, filter } from 'rxjs';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { BackaenErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../store/selectors';
import { updateCurrentUserAction } from 'src/app/auth/store/actions/updateCurrentUser.action';
import { CurrentUserInputInterface } from 'src/app/shared/types/currentUserInput.interface';
import { logoutAction } from 'src/app/auth/store/actions/logout.action';

@Component({
  selector: 'mc-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit, OnDestroy {
  form: FormGroup;
  currentUser: CurrentUserInterface;
  currentUserSubsription: Subscription;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackaenErrorsInterface | null>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initialiseListeners();
    this.initializeValues();
  }

  ngOnDestroy(): void {
    this.currentUserSubsription.unsubscribe();
  }

  initialiseListeners() {
    this.currentUserSubsription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUserInterface) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }

  initializeForm() {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: '',
    });
  }

  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  submit() {
    const currentUserInput: CurrentUserInputInterface = {
      ...this.currentUser,
      ...this.form.value,
    };
    console.log('this.currentUser: ' + JSON.stringify(this.currentUser));
    console.log('this.form.value: ' + JSON.stringify(this.form.value));
    console.log('currentUserInput: ' + JSON.stringify(currentUserInput));
    this.store.dispatch(updateCurrentUserAction({ currentUserInput }));
  }

  logout() {
    this.store.dispatch(logoutAction());
  }
}
