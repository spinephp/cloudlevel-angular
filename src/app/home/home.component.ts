import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../commons/service/values.service';
import { LocalStorage } from '../commons/provider/local-storage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public languageid: number;
  title = 'Cloud Level';

  constructor(
    private ls: LocalStorage,
    private vs: ValuesService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const that = this;
    // $('[data-toggle="tooltip"]').tooltip();
    this.vs.setLanguageId(+this.ls.get('languageid'));
    this.vs.currentLanguageId().subscribe((value: number) => {
      that.languageid = value;
    });
    this.router.data.subscribe((data: {}) => {
      const sdata = 'data';
      // that.goodsClass = data[sdata][0];
      // that.goods = data[sdata][1];
      // that.news = data[sdata][2];
    });
  }

}
