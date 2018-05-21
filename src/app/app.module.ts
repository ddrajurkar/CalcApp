import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CalcComponentComponent } from './calc-component/calc-component.component'
import { FormsModule } from '@angular/forms';
import { WordComponent } from './word/word.component';
import { HttpModule } from '@angular/http';
import {WordsearchService} from './wordsearch.service';
import { GetDataComponent } from './get-data/get-data.component';
import { GetdataService } from './get-data/getdata.service';
import { ROUTING } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponentComponent,
    WordComponent,
    GetDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [WordsearchService,GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }