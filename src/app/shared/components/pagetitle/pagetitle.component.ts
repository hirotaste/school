import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './pagetitle.component.html'
})
export class PagetitleComponent {
  @Input() breadcrumbItems: any[] = [];
  @Input() title: string = '';
}
