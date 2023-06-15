import { Component } from '@angular/core';

@Component({
  selector: 'mc-global-feed',
  templateUrl: './globalFeed.component.html',
  styleUrls: ['./globalFeed.component.scss'],
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}

// articles?tag=welcome&limit=10&offset=0
/**receivedMessage: string = '';

handleMessage(message: string) {
  this.receivedMessage = message;
}
*/
