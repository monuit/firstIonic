import { Injectable } from '@angular/core';

import { Pdata } from '../app/pdata';
import { PDATA } from '../assets/data/pData';


@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  loadData(): Pdata {
    return PDATA;
    }

  constructor() { }
}
