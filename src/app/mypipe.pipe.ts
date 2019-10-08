import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    if(args[0].toLowerCase() === 'thismale'){
      return 'mr'+value;
    }

    if(args[0].toLowerCase() === 'thisfemale'){
      return 'miss'+value;
    }
    
  }

}
