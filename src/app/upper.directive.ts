import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[upper]'
})
export class UpperDirective {

   constructor(private e: ElementRef, private r: Renderer) { 
       e.nativeElement.style.textTransform = 'uppercase';
    }

}
