import { Component, ComponentFactoryResolver, ComponentRef, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChildren(ContainerComponent)
  containers!: QueryList<ContainerComponent>;

  containerOneEnabled = true;

  containerTwoEnabled = true;

  private childComponentRef!: ComponentRef<ChildComponent>;

  private childHost1!: ViewContainerRef;
  private childHost2!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    this.childHost1 = this.containers.first.viewContainerRef;
    this.childHost2 = this.containers.last.viewContainerRef;
    this.attachChildToContainerOne();
  }

  attachChildToContainerOne() {

    console.log(this.containers, this.containers.last);

    this.childHost1.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(ChildComponent);
    this.childComponentRef = this.childHost1.createComponent(factory);
  }

  moveChildFromFirst() {
    if(this.containers.length != 2) { return; }


    this.childHost1.detach(this.childHost1.indexOf(this.childComponentRef.hostView));

    this.containers.last.viewContainerRef.insert(this.childComponentRef.hostView);
  }

  moveChildFromSecond() {
    if(this.containers.length != 2) { return; }


    this.childHost2.detach(this.childHost2.indexOf(this.childComponentRef.hostView));

    this.containers.first.viewContainerRef.insert(this.childComponentRef.hostView);
  }



  destroyContainerOne() {
    this.containerOneEnabled = false;
  }

  destroyContainerTwo() {
    this.containerTwoEnabled = false;
  }
}
