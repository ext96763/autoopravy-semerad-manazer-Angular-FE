import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { CarModel } from '../shared/models/CarModel';
import { CarList } from '../shared/models/CarList';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';

const APIEndpoint = environment.APIEndpoint;

@Injectable()
export class CarService {

  api_cars_list = APIEndpoint + '/cars';
  api_carDetail_detail = APIEndpoint + '/car/detail?id=40';

  headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor (private http: HttpClient){
    this.getCarList();
    this.getCarDetail();
  }

  //GET User Detail with all cars and repairs
  getCarDetail(): Observable<CarModel> {return this.http.get<CarModel>(this.api_carDetail_detail);}

  //GET User list for easy FE navigation and looking for users
  getCarList(): Observable<Array<CarList>> {
    console.log('user service: ' + CarList);
    return this.http.get<Array<CarList>>(this.api_cars_list);}

}
