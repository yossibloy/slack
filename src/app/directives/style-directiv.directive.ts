import { Directive, ElementRef, HostBinding, HostListener,  } from '@angular/core';


@Directive({
  selector: '[StyleDirectiv]'
})
export class StyleDirectivDirective  {

  constructor() {}

@HostBinding("style.box-shadow")
 boxshadow:string = "0 0 10px #BAC3C3"

}