import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiLolProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class ProviderServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ProviderServiceProvider Provider');
  }

  getChampionsFull(searchParam: string): Observable<any> {
    return this.http.get(`${searchParam}`)
      .map(res => <any>res.json());
  }

}
