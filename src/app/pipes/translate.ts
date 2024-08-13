import { Pipe, PipeTransform } from '@angular/core';
//import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor() {}

  transform(value: any, args?: any): any {
var array  = {
  
  "NOConditions":"ללא תנאים"
  

}
    return array[value];
  }
}