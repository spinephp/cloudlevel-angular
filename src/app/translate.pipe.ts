import { Pipe, PipeTransform } from '@angular/core';
import { SettingsService } from './commons/service/settings.service';
import { LocalStorage } from './commons/provider/local-storage';
import { isArray } from 'util';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  public static data;
  constructor(private cv: SettingsService, private ls: LocalStorage) {
    const that = this;
    this.cv.getLanguages().subscribe((value: {}) => {
      TranslatePipe.data = value;
    });
   }

  transform(value: unknown, ...args: unknown[]): unknown {
    const langid = parseInt(args[0] as string || this.ls.get('languageid'), 10);
    let result: string;
    if (isArray(value)) {
      result = value[langid] as string;
    } else  {
      const tem: string = value as string;
      if (TranslatePipe.data && TranslatePipe.data[tem] && langid > 0) {
        result = TranslatePipe.data[tem][langid - 1];
      } else {
        result = tem || '';
      }
    }
    return result;
  }

}
