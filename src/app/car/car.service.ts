import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { CarModel } from '../shared/models/CarModel';
import { CarList } from '../shared/models/CarList';
import {Observable} from 'rxjs';

@Injectable()
export class CarService {
  api_cars_list = 'http://localhost:8090/cars';
  api_carDetail_detail = 'http://localhost:8090/car/detail?id=5';

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
