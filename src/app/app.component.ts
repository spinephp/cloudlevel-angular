import { Component } from '@angular/core';
import { LocalStorage } from './commons/provider/local-storage';
import { ValuesService } from './commons/service/values.service';
import { SettingsService } from './commons/service/settings.service';
import { TranslatePipe } from './translate.pipe';
import { ALoginer, LoginerData } from './classes/loginer';
import { isDefined } from '@angular/compiler/src/util';
import { HeaderService } from './header.service';
import { ALanguage } from './classes/language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HeaderService]
})
export class AppComponent {
  public languageid: number;
  public aLoginer: ALoginer;
  public languages = [];
  public rooturl: string;
  constructor(
    private headerService: HeaderService,
    private ls: LocalStorage,
    private vs: ValuesService,
    private ss: SettingsService,
    private tr: TranslatePipe
  ) {
    this.rooturl = ss.rootUrl;
    this.aLoginer = new ALoginer(null);
    this.languageid = 0;
  }
  title = 'Cloud Level';
  logined = false;
  logtext = 'Login';
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    const that = this;
    // $('[data-toggle="tooltip"]').tooltip();
    this.vs.setLanguageId(+this.ls.get('languageid'));
    this.vs.currentLanguageId().subscribe((value: number) => {
      that.languageid = value;
    });
    this.vs.currentLoginer().subscribe((value: LoginerData) => {
      if (value === undefined || value === null) {
        that.logined = false;
        that.logtext = 'Sign in';
        that.aLoginer = new ALoginer(null);
      } else {
        that.logined = true;
        that.logtext = 'Sign out';
        that.aLoginer = new ALoginer(value);
      }
    });
    this.headerService.heart().then(res => {
      const sok = 'ok';
      const sdata = 'data';
      if (res[sok] === true) {
        that.ls.set('publickey', res[sdata][0].token);
        that.ls.set('sessionid', res[sdata][0].sessionid);
        that.ss.sessionid = res[sdata][0].sessionid;
      } else {
        const serror = 'error';
        console.log(res[serror]);
        that.ss.sessionid = that.ls.get('sessionid');
      }
      // that.languages = [
      //   {id: '1', names: ['english', '英语']},
      //   {id: '2', names: ['chinese', '汉语']},
      // ];
      Promise.all(this.headerService.get()).then(rs => {
        // console.log(rs);
        const sqq = 'qq';
        if (rs[1] !== undefined) {
          that.languages = rs[1];
        }
        that.ls.set(sqq, rs[0][0][sqq]);
        // const lid = that.ls.get('languageid') || 1;
        // that.selectChangeLanguage(lid);
      });
  });

  }

  // 选择了新的语言
  selectChangeLanguage(id) {
    this.ls.set('languageid', id); // 把新语言保存在 local storage
    this.vs.setLanguageId(id); // 设置当前系统语言
  }

  logout() {
    const that = this;
    // 登出
    if (this.logined && isDefined(this.aLoginer) && +this.aLoginer.item.id > 0) {
      const param = {
        user: this.aLoginer.item.name,
        action: 'custom_logout',
        token: this.ls.get('sessionid')
      };
      this.headerService.logout(param).then((rs: LoginerData) => {
        if (+rs.id >= 0) {
          that.vs.setLoginer(undefined);
        }
      });
    } else {
      // 未登录
    }
  }

  ngDestroy() {
    this.ls.set('languageid', this.languageid);
  }
}
