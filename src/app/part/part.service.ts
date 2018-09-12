import { Injectable } from '@angular/core';
import { Part } from '../shared/models/Part';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PartService {
  api_part_list: string = 'http://localhost:8090/parts';

  constructor(private http: HttpClient) {
    this.getPartsList();
  }

  //GET repair list
  getPartsList(): Observable<Array<Part>> { return this.http.get<Array<Part>>(this.api_part_list); }

}
