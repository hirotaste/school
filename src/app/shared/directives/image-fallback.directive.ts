import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgFallback]'
})
export class ImgFallbackDirective {
  @Input() appImgFallback: string = '';
  private retry = 0;
  private maxRetry = 3;

  constructor(private eRef: ElementRef) {}

  @HostListener('error')
  loadFallbackOnError() {
    const element: HTMLImageElement = <HTMLImageElement>this.eRef.nativeElement;
    const defaultUrl = this.appImgFallback || 'assets/images/user-avatar.png';

    const originalSrc = element.src;

    if (originalSrc === `${window.location.origin}/`) {
      element.src = defaultUrl;
      return;
    }

    if (this.retry !== this.maxRetry) {
      this.retry += 1;
      element.src = defaultUrl;

      setTimeout(() => {
        element.src = originalSrc;
      }, 1500);
    } else {
      element.src = defaultUrl;
    }
  }
}
