import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { PreloaderComponent } from './preloader/preloader.component';

@NgModule({
  declarations: [PreloaderComponent, PagetitleComponent],
  imports: [CommonModule],
  exports: [PreloaderComponent, PagetitleComponent]
})
export class ComponentsModule {}
