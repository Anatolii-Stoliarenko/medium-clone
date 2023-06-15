import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-error-message',
  template: '<div>{{messageProps}}</div>',
})
export class ErrorMessageComponent {
  @Input('mesagge') messageProps: string = 'Somathing went wrong';
}
