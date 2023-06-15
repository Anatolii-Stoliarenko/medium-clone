import { Component, Input, OnInit } from '@angular/core';
import { BackaenErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'ms-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackaenErrorsInterface;

  errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (key: string) => {
        const messages = this.backendErrorsProps[key].join(', ');
        return `${key} ${messages}`;
      }
    );
  }
}
