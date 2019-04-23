
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/Rx';

@Injectable()
export class ServerService{
    constructor(private http: Http){}
    getContentJSON() {
      //  return this.http.get('src/app/SPM.json')
      //  .map(response => response.json());
      }
}