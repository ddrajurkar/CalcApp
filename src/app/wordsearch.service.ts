import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WordsearchService {

  url : string
 // result : JSON

  constructor(private http:Http) {
    this.url = 'https://api.datamuse.com/words?max=10&ml=';
   }

   callAPi(term){
     return this.http.get(this.url+term).map(res => {return res.json()})
   }

   
}
