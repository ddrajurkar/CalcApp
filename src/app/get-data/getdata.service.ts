import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Http } from '@angular/http';


@Injectable()
export class GetdataService {

  url: string

  constructor(private http:Http) { 
       this.url = 'https://api.datamuse.com/words?max=10&ml='; 
  }

  getData(term){
      //return this.http.get(this.url+term);
  return this.http.get(this.url+term).map(res => {return res.json()})
    }

}
