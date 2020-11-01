import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LocalStorage } from '../commons/provider/local-storage';
import { ValuesService } from '../commons/service/values.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  title = 'Field Level';
  public languageid: number;

  constructor(
    private ls: LocalStorage,
    private vs: ValuesService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const that = this;
    // $('[data-toggle="tooltip"]').tooltip();
    // this.vs.setLanguageId(+this.ls.get('languageid'));
    this.vs.currentLanguageId().subscribe((value: number) => {
      that.languageid = +value;
    });
    // tslint:disable-next-line:no-shadowed-variable
    this.router.params.subscribe((params: Params) => {
      const param = 'languageid';
      const lid = params[param];
      if (lid !== undefined) {
          this.languageid = lid === '0' ? 0 : 1;
          this.vs.setLanguageId(this.languageid);
      }
      });
    this.router.data.subscribe((data: {}) => {
      const sdata = 'data';
    });
  }

}
