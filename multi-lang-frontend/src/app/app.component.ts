import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { catchError, throwError } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'multi-lang-frontend';
  message_check = "";
  data=  "";
  constructor(public translate: TranslateService, public http: HttpClient) {
    translate.addLangs(['en', 'vi'])
    translate.setDefaultLang('en')

  }

  switchLanguage(lang: string){
    this.translate.use(lang);
    console.log(this.translate.currentLang);
    localStorage.setItem("LANG_STORAGE_KEY",lang)
  }
  getMessageCheck(){
    this.get();
    this.translate.onLangChange.subscribe(() => {
      this.get();
  });
    
  }
  get(){
    this.translate.get('name').subscribe((message: string) => {
      this.message_check = message;
      console.log('Translated Message:',  message);
  });
  }
  getMessageCheckFromServer(){
    this.http.get('http://localhost:8080/api/v1/message-check').subscribe(response => {
      // Handle the successful response here
    this.data = JSON.stringify(response);
    });
  }
}
