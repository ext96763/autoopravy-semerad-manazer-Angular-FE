import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { UserListModel } from '../shared/models/UserListModel'; 
import { UserModel } from '../shared/models/UserModel'; 
import { CarModel } from '../shared/models/CarModel';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment';

const APIEndpoint = environment.APIEndpoint;

@Injectable()
export class UserSService {

  api_users_list = APIEndpoint + '/customers';
  api_customer_detail = 'APIEndpoint/user/detail?id=26';

  headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor (private http: HttpClient){
    this.getUserList();
    this.getUserDetail();
  }

  //GET User Detail with all cars and repairs
  getUserDetail(): Observable<UserModel> {return this.http.get<UserModel>(this.api_customer_detail);}

  //GET User list for easy FE navigation and looking for users
  getUserList(): Observable<UserListModel[]> {return this.http.get<UserListModel[]>(this.api_users_list, {headers: this.headers});}

}
