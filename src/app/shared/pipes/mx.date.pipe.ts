import { Pipe, PipeTransform } from "@angular/core";
import { formatDate } from "@angular/common";

@Pipe({
  name: 'dateMx'
})

export class DateMx implements PipeTransform {
  transform(value: string | Date | undefined, time?: any): string | Date {
    if(!value) return '-';
    if(time) return formatDate(value!, 'dd/MM/yyyy h:mm a', 'en-es');
    return formatDate(value!, 'dd/MM/yyyy', 'en-es');
  }

}
