import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  requestedComponent: string;

  constructor() {
    //Pre-set, so we don't start with a blank page
    this.requestedComponent = 'recipes';
  }

  onHeaderListedComponentRequest(requestedComponent: string): void {
    this.requestedComponent = requestedComponent;
  }
}
