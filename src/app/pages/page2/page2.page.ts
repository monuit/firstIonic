import { Component, OnInit } from '@angular/core';
import { Pdata } from '../../pdata';
import { GetdataService } from '../../getdata.service';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  myData!: Pdata;

  loadMyData(): void {
  this.myData = this.ldData.loadData(); }

  constructor(private ldData: GetdataService) { }

  ngOnInit()
  { this.loadMyData(); }

}
