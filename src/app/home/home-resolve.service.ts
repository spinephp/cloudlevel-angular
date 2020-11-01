import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../commons/service/settings.service';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolveService {

  constructor(
    private router: Router,
    private cv: SettingsService,
    private hs: HomeService,
    ) { }
  resolve(): {} {
    const word: {} = {
      'Functions and features': ['功能与特点'],
      'Cloud level app is a convenient, flexible and efficient field level monitoring and management tool.': ['云水平仪是一款支持 iPhone 和 iPad 的现场水平仪管理 app'],
      'Add and delete field level dynamically.': ['动态添加和删除现场水平仪。'],
      'Be able to monitor and manage multiple field level instruments at the same time.': ['能同时监测和管理多台现场水平仪。'],
      'Support real-time and continuous recording of field level data.': ['支持对现场水平仪数据进行实时和连续记录。'],
      'Supports playback of recorded content': ['支持对录制的内容进行回放'],
      'Supports curve display and data analysis of recorded content': ['支持对录制的内容进行曲线显示和数据分析'],
      };
    this.cv.addLanguages(word);
    return this.hs.updateData().then(rs => {
      return rs;
    });
  }
}
