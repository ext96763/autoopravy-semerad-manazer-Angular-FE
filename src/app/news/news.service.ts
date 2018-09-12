import { Injectable } from '@angular/core';
import { News } from '../shared/models/News';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class NewsService {
   
  api_news: string = 'http://localhost:8090/news';

  constructor (private http: HttpClient){
    this.getNewsList();
  }

  //GET User Detail with all cars and repairs
  getNewsList(): Observable<Array<News>> {return this.http.get<Array<News>>(this.api_news);}
}
