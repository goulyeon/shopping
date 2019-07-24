import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comma'
})
export class CommaPipe implements PipeTransform {
  
  //구현해야할 메소드 
  transform(value: number): string {
    //숫자를 매개변수로 받은 후 세자리단위로 콤마를 찍은 뒤 가장뒤에 '원'을 붙여서 리턴
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'원';
  }

}
