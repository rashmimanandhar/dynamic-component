import { Component, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnDestroy {
  @Input('name')
  name!: string;

  @ViewChild('vc', { read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('Boodbye from ' + this.name);
  }

}
