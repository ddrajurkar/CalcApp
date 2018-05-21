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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponentComponent,
    WordComponent,
    GetDataComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [WordsearchService,GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }