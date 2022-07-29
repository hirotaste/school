import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-preloader',
  templateUrl: './preloader.component.html'
})
export class PreloaderComponent {
  @Input() display = false;

  show() {
    this.display = true;
  }

  hide() {
    this.display = false;
  }
}
