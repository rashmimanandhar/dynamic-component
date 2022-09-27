import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: 'Child Component',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('Boodbye from child component');
  }

}
