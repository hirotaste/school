import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarContext {
  private expanded = new BehaviorSubject(window.matchMedia('(max-width: 992px)').matches);

  setExpanded(value: boolean) {
    return this.expanded.next(value);
  }

  get isExpanded() {
    return this.expanded.value;
  }

  toggle() {
    this.expanded.next(!this.expanded.value);
  }

  get valueChanges() {
    return this.expanded;
  }
}
