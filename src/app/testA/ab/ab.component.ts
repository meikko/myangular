import { Component, OnInit } from '@angular/core';

import { Service } from './service';
import { Response } from '../../common/response';

@Component({
  selector: 'app-ab',
  templateUrl: './ab.component.html',
  styleUrls: ['./ab.component.css']
})
export class AbComponent implements OnInit {

  list: any;
  a: any;
  b: any;
  c: any;

  constructor(private service: Service) { }

  ngOnInit(): void {
    this.doQuery();
    this.getcookie();
  }

  private doQuery(): void {
    this.service.TestgetUserList().subscribe(
      (resp: Response) => {
        this.list = resp.data.a;
        this.list = resp.data.b;
        this.list = resp.data.c;
        this.list = resp.data.list;
      }
    );
  }

  private getcookie(): void{
    this.service.GetCookie().subscribe();
  }

}
