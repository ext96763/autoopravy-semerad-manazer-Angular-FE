import { Injectable } from '@angular/core';
import { RepairList } from '../shared/models/RepairList';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RepairModel } from '../shared/models/RepairModel';

@Injectable()
export class RepairService {
  api_repair_list: string = 'http://localhost:8090/repairs';
  api_repair_detail: string = 'http://localhost:8090/repairs?id=2';

  constructor(private http: HttpClient) {
    this.getRepairList();
    this.getRepairDetail();
  }

  //GET repair list
  getRepairList(): Observable<Array<RepairList>> { return this.http.get<Array<RepairList>>(this.api_repair_list); }

  //GET Repair Detail with all cars and repairs
  getRepairDetail(): Observable<RepairModel> { return this.http.get<RepairModel>(this.api_repair_detail); }

}
