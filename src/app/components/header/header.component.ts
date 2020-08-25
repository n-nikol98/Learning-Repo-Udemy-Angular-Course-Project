import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() linkClicked: EventEmitter<string>;

  collapsed: boolean;

  constructor() { 
    this.linkClicked = new EventEmitter<string>();

    this.collapsed = true;
  }

  ngOnInit(): void {
  }

  onLinkClicked(componentId: string): void {
    this.linkClicked.emit(componentId);
  }

}
