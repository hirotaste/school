import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleTopBarService {
  private state = new Subject<string>();

  update(title: string) {
    this.state.next(title);
  }

  get change() {
    return this.state;
  }
}
